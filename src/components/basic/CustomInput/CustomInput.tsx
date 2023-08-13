import { useId } from 'react';

import { CustomInputProps } from './models/CustomInputProps'
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";

import './customInput.scss'

export const CustomInput = ({
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
}: CustomInputProps) => {
    const eventChange = (value: string  ) => {
        handleChangeValue(value);
    }

    const UiCustomeInput = useId();

    const isDone = done && <FaCheckCircle color="#5BCF5F" className="sh-status-icon"/>

    return (
        <div className={`sh-customInput ${className}`}>

            {label && <label className='sh-customInput__label' htmlFor={UiCustomeInput} >{ label }</label>}

            <div className='sh-customInput__container'>
                {
                    type !== 'textarea' 

                    ?
                        <input 
                            className='sh-customInput__container--input'
                            type={type}  
                            placeholder={placeholder} 
                            required={isRequired}
                            onInput={(event: React.ChangeEvent<HTMLInputElement> ) => eventChange(event.target.value)}
                            data-testid='sh-customInput__input'
                            id={UiCustomeInput}
                        />
                    : 
                        <textarea
                            className={`sh-customInput__container--textarea ${noRisize ?'resize-none': ''}`}
                            placeholder={placeholder}
                            required={isRequired}
                            onInput={(event: React.ChangeEvent<HTMLTextAreaElement> ) => eventChange(event.target.value)}
                            data-testid='sh-customInput__textarea'
                            id={UiCustomeInput}
                        />
                }

                {
                    isDone
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