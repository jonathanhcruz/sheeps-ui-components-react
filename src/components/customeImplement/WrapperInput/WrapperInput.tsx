import { useId } from 'react';

import { WrapperInputProps } from './models/WrapperInputProps'

import { mapComponents } from './mapComponents';

import { CheckCircleIcon } from 'src/components/icons'



import './wrapperInput.scss'

export const WrapperInput = ({
    label,
    type,
    placeholder,
    className = '',
    error = false,
    errorMessage,
    isRequired = false,
    noRisize,
    done,
    handleChangeValue,
    options
}: WrapperInputProps) => {
    const eventChange = (value: string  ) => {
        handleChangeValue(value);
    }

    const UiCustomeInput = useId();

    

    const dinamicInput = mapComponents[type] ?? mapComponents.text;

    return (
        <div className={`sh-customInput ${className}`}>

            {label && <label className='sh-customInput__label' htmlFor={UiCustomeInput} >{ label }</label>}

            <div className='sh-customInput__container'>
                {
                    
                    dinamicInput({
                        type,
                        placeholder,
                        isRequired,
                        UiCustomeInput,
                        noRisize,
                        options,
                        handleChangeValue: eventChange,
                    })
                }      
                {
                    done && <CheckCircleIcon color="#5BCF5F" className="sh-status-icon"/>
                }
            </div>
                
            {
                error && 
                <span className='sh-customInput__error-message' 
                    data-testid='sh-customInput__error'
                >
                    { errorMessage }
                </span>
            }
        </div>
    )
}