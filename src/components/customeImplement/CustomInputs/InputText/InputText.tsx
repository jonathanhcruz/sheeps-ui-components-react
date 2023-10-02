import './InputText.scss';

import { InputsProp } from 'src/models'

export function InputText({
    type,
    placeholder,
    isRequired,
    handleChangeValue,
    UiCustomeInput
}: InputsProp): JSX.Element {
    return (
        <div className='sh_input--text'>
            <input 
                type={type}  
                placeholder={placeholder} 
                required={isRequired}
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
                data-testid='sh-customInput__input'
                id={UiCustomeInput}
            />
        </div>
    );
}
