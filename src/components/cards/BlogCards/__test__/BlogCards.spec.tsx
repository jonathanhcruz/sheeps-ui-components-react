// @vitest-environment jsdom

import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react'

// Component
import { BlogCards } from 'src/';

// Mocks
import { firstConfigData } from './mocks/dataMock'

describe('BlogCards', () => {
    const { imageUrl,  imageDescription, title, description, imageResoursSizes} = firstConfigData;

    afterEach(() => {
        cleanup();
    });
    it('should render the component correctly', () => {
        const blogCards = render(<BlogCards
            imageUrl={imageUrl}
            imageDescription={imageDescription}
            title={title}
            description={description}
        />);

        expect(blogCards).toBeTruthy();
        expect(blogCards).toMatchSnapshot();
    });

    it('should render the component with the linkJsx', () => {
        const {getAllByText} = render(<BlogCards
            imageUrl={imageUrl}
            imageDescription={imageDescription}
            title={title}
            description={description}
            linkJsx={<a href="https://www.google.com">Read more</a>}
        />);
        
        const link = getAllByText('Read more');
        expect(link).toBeTruthy();
    });

    it('should import and render CustomeImg component', () => {
        const {container} = render(<BlogCards
            imageUrl={imageUrl}
            imageDescription={imageDescription}
            title={title}
            description={description}
            imageResoursSizes={imageResoursSizes}
        />);

        const customeImg = container.querySelector('.sh-customeImage');
        expect(customeImg).toBeTruthy();
        expect(customeImg?.querySelector('img')?.getAttribute('src')).toBe(imageUrl);
        expect(customeImg?.querySelector('source')?.getAttribute('srcSet')).toBe(imageResoursSizes?.[0]?.url ?? '');
    });
});