import './InputFile.scss'

import { InputsProp } from 'src/models'

export function InputFile({
    type,
    placeholder = 'select file',
    isRequired,
    UiCustomeInput,
    handleChangeValue,
}: InputsProp): JSX.Element {
    return (<>
        <div className='sh_input--file'>
            <input 
                id={UiCustomeInput}
                type={type}  
                placeholder={placeholder} 
                data-testid='sh_input--file'
                required={isRequired}
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
            />
            <label htmlFor={UiCustomeInput}>
                {/* <UploadIcon color='#000' className='sh-customInput__label-file-icon'/>  */}
                {placeholder}
            </label>
        </div>
    </>)
}
