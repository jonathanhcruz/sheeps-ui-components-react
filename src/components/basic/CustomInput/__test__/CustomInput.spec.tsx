// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react'

// Mocks
// Component
import { CustomInput } from 'src/';

describe('CustomeImg', () => {
    describe('handel change value', () => {
        it('should call handleChangeValue', () => {
            const handleChangeValue = vi.fn();
            const customInput = render(<CustomInput type='text' placeholder='Enter text here' handleChangeValue={handleChangeValue} />);
            const inputElement = customInput.getByTestId('sh-customInput__input')
            fireEvent.input(inputElement, { target: { value: 'test' } });

            expect(handleChangeValue).toHaveBeenCalled();
            expect(handleChangeValue).toHaveBeenCalledWith('test');
    
            cleanup();

        });
    });

    describe('show error', () => {
        it('show show error', () => {
            const customInput = render(<CustomInput type='text' placeholder='Enter text here' handleChangeValue={() => {}} error errorMessage='Error message' />);
            const errorMessageElement = customInput.getByTestId('sh-customInput__error');
            
            expect(errorMessageElement).toBeDefined();
            expect(errorMessageElement.textContent).toBe('Error message');


            cleanup();
        });
    });

    describe('show input', () => {
        it('should render the component correctly', () => {
            const customInput = render(<CustomInput type='text' placeholder='Enter text here' handleChangeValue={() => {}} />);
            expect(customInput).toBeDefined();
            expect(customInput).toMatchSnapshot();
    
            cleanup();
        });
    
        it('should show correct type input', () => {
            const customInput = render(<CustomInput type='password' placeholder='Enter text here' handleChangeValue={() => {}} />);
            const inputElement = customInput.getByTestId('sh-customInput__input')
    
            expect(inputElement?.getAttribute('type')).toBe('password');
    
            cleanup();
        });
    });

    describe('show textarea', () => {
        it('should render textarea input with resizes input',() => {
            const customTextArea = render(<CustomInput type='textarea' placeholder='Enter text here' handleChangeValue={() => {}} noRisize />);
            const textareaElement = customTextArea.getByTestId('sh-customInput__textarea')
            expect(textareaElement.tagName).toBe('TEXTAREA');
            expect(textareaElement.classList.contains('resize-none')).toBeTruthy();
    
            cleanup();
        });
    });

    

});

