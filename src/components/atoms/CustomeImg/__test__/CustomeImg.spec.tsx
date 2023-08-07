// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

// Mocks
import { firstConfigData } from './mocks/dataMock'

// Component
import { CustomeImg } from 'src/';

describe('CustomeImg', () => {
    const { imageUrl, alt, classNameImg, imageResoursSizes, imgZoom } = firstConfigData;
    it('should render the component correctly', () => {
        const customeImg = render(<CustomeImg 
            imageUrl={imageUrl}
            alt={alt}
            classNameImg={classNameImg}
        />);
        expect(customeImg).toBeDefined();
        expect(customeImg).toMatchSnapshot();
    });

    it('should render the component with imageResoursSizes', () => {
        const {container} = render(<CustomeImg 
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
        const {container} = render(<CustomeImg 
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