// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

// Component
import { BlogCards } from 'src/';

describe('BlogCards', () => {
    it('test_default_props', () => {
        const btn = render(<BlogCards 
            imageUrl='https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg' 
            title="lorem" 
            description='Sit et proident ad proident pariatur eu veniam reprehenderit. Elit laboris cillum magna aliquip nostrud elit dolor cupidatat cillum non sit sint nisi mollit. Veniam esse laborum irure aute laboris anim magna magna reprehenderit cillum aliqua aute. Laborum irure exercitation eiusmod ut culpa dolore nostrud ipsum. Reprehenderit dolore fugiat Lorem incididunt dolore officia irure nostrud sit sint labore consequat cillum.'/>);
        expect(btn).toBeDefined();
    });
});