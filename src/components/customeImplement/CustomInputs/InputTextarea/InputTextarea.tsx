import './InputTextarea.scss'

import { InputsProp } from 'src/models'

export function InputTextarea({
    placeholder,
    isRequired,
    UiCustomeInput,
    noRisize,
    handleChangeValue,
}: InputsProp ): JSX.Element {
    return (
       <div className='sh_input--textarea'>
            <textarea
                className={`sh-customInput__container--textarea ${noRisize ?'resize-none': ''}`}
                placeholder={placeholder}
                required={isRequired}
                onInput={(event: React.ChangeEvent<HTMLTextAreaElement> ) => handleChangeValue(event.target.value)}
                data-testid='sh-customInput__textarea'
                id={UiCustomeInput}
            />
       </div>
    )
}