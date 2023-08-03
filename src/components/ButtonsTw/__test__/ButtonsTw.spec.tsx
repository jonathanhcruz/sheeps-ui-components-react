// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

// Component
import { ButtonsTw } from 'src/';

describe('Button', () => {
    it('test_default_props', () => {
        const btn = render(<ButtonsTw label='hola' />);
        
        expect(btn).toBeDefined();
    });
});