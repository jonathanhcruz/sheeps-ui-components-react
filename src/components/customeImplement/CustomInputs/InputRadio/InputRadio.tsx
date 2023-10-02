import './InputRadio.scss'

import { InputsProp } from 'src/models'

export function InputRadio({
    type,
    placeholder,
    UiCustomeInput,
    options = [],
    handleChangeValue,
}: InputsProp): JSX.Element {
    return (
        <div className='sh_input--radio'>
            {   
                options.map((option, index) => (
                    <div className='sh-customInput__container--radio' 
                        key={`customInput-radio-${index}`}
                    >
                        <input 
                            type={type}  
                            placeholder={placeholder} 
                            onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
                            data-testid='sh-customInput__input'
                            id={`radio-${UiCustomeInput}-${index}`}
                            name={`${UiCustomeInput}`}
                        />
                        <label htmlFor={`radio-${UiCustomeInput}-${index}`} className='sh-customInput__label-checkbox'>{option}</label>
                    </div>
                ))
            }
        </div>
    )
}