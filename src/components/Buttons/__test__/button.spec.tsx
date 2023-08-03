// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

// Component
import Button from '../Button';

describe('Button', () => {
    it('test_default_props', () => {
        const btn = render(<Button label='hola' />);
        
        expect(btn).toBeDefined();
    });
});