import { InputsProp } from 'src/models'

// import { UploadIcon } from 'src/components/icons'

function InputText({
    type,
    placeholder,
    isRequired,
    handleChangeValue,
    UiCustomeInput
}: InputsProp): JSX.Element {
    return (<>
        <input 
            type={type}  
            placeholder={placeholder} 
            required={isRequired}
            onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
            data-testid='sh-customInput__input'
            id={UiCustomeInput}
        />
    </>);
}


function InputCheckbox({
    type,
    placeholder,
    isRequired,
    UiCustomeInput,
    handleChangeValue,
}: InputsProp): JSX.Element {
    return (<>
        <div className='sh-customInput__container--checkbox'>
            <input 
                type={type}  
                placeholder={placeholder} 
                required={isRequired}
                onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
                data-testid='sh-customInput__input'
                id={UiCustomeInput}
            />
            <label htmlFor={UiCustomeInput} className='sh-customInput__label-checkbox'>{placeholder}</label>
        </div>
    </>)
}

function InputRadio({
    type,
    placeholder,
    UiCustomeInput,
    options = [],
    handleChangeValue,
}: InputsProp): JSX.Element {
    return (<>
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
    </>)
}

function InputFile({
    type,
    placeholder = 'select file',
    isRequired,
    UiCustomeInput,
    handleChangeValue,
}: InputsProp): JSX.Element {
    return (<>
        <div className='sh-customInput__container--file'>
            <input 
                id={UiCustomeInput}
                type={type}  
                placeholder={placeholder} 
                data-testid='sh-customInput__input'
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

function InputTextarea({
    placeholder,
    isRequired,
    UiCustomeInput,
    noRisize,
    handleChangeValue,
}: InputsProp ): JSX.Element {
    return (
        <textarea
            className={`sh-customInput__container--textarea ${noRisize ?'resize-none': ''}`}
            placeholder={placeholder}
            required={isRequired}
            onInput={(event: React.ChangeEvent<HTMLTextAreaElement> ) => handleChangeValue(event.target.value)}
            data-testid='sh-customInput__textarea'
            id={UiCustomeInput}
        />
    )
}


export { 
    InputText, 
    InputCheckbox, 
    InputRadio, 
    InputFile, 
    InputTextarea
 }