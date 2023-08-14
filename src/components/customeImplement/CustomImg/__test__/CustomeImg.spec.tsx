// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

// Mocks
import { firstConfigData } from './mocks/dataMock'

// Component
import { CustomImg } from 'src/';

describe('CustomImg', () => {
    const { imageUrl, alt, classNameImg, imageResoursSizes, imgZoom } = firstConfigData;
    it('should render the component correctly', () => {
        const customImg = render(<CustomImg 
            imageUrl={imageUrl}
            alt={alt}
            classNameImg={classNameImg}
        />);
        expect(customImg).toBeDefined();
        expect(customImg).toMatchSnapshot();
    });

    it('should render the component with imageResoursSizes', () => {
        const {container} = render(<CustomImg 
            imageUrl={imageUrl}
            alt={alt}
            classNameImg={classNameImg}
            imageResoursSizes={imageResoursSizes}
        />);
        
        const sourceImg = container.querySelector('source');

        expect(sourceImg?.getAttribute('sizes')).toBe(`min-width:${imageResoursSizes?.[0]?.size}`);
        expect(sourceImg?.getAttribute('srcset')).toBe(imageResoursSizes?.[0]?.url);
    });

    it('should render the component with imgZoom', () => {
        const {container} = render(<CustomImg 
            imageUrl={imageUrl}
            alt={alt}
            classNameImg={classNameImg}
            imageResoursSizes={imageResoursSizes}
            imgZoom={imgZoom}
        />);
        
        const img = container.querySelector('img');
        expect(img?.classList.contains('zoom-img')).toBe(true);
    });
});