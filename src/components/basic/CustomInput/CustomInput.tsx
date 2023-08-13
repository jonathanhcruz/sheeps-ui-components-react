import { CustomInputProps } from './models/CustomInputProps'

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
    handleChangeValue
}: CustomInputProps) => {

    const eventChange = (value: string  ) => {
        handleChangeValue(value);
    }
    
    return (
        <div className={`sh-customInput ${className}`}>

            {label && <label className='sh-customInput__label'>{ label }</label>}

            {
                type !== 'textarea' 

                ?
                    <input 
                        className='sh-customInput__input'
                        type={type}  
                        placeholder={placeholder} 
                        required={isRequired}
                        onInput={(event: React.ChangeEvent<HTMLInputElement> ) => eventChange(event.target.value)}
                        data-testid='sh-customInput__input'
                    />
                : 
                    <textarea
                        className={`sh-customInput__textarea ${noRisize ?'resize-none': ''}`}
                        placeholder={placeholder}
                        required={isRequired}
                        onInput={(event: React.ChangeEvent<HTMLTextAreaElement> ) => eventChange(event.target.value)}
                        data-testid='sh-customInput__textarea'
                    />
            }

            {
                error && 
                <span className='sh-customInput__error-message ' 
                    data-testid='sh-customInput__error'
                >
                    { errorMessage }
                </span>
            }
        </div>
    )
}