// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react'

// Mocks
// Component
import { CustomInputs } from 'src/';

describe('CustomeImg', () => {
    describe('handel change value', () => {
        it('should call handleChangeValue', () => {
            const handleChangeValue = vi.fn();
            const customInput = render(<CustomInputs type='text' placeholder='Enter text here' handleChangeValue={handleChangeValue} />);
            const inputElement = customInput.getByTestId('sh-customInput__input')
            fireEvent.input(inputElement, { target: { value: 'test' } });

            expect(handleChangeValue).toHaveBeenCalled();
            expect(handleChangeValue).toHaveBeenCalledWith('test');
    
            cleanup();

        });
    });
    

});

