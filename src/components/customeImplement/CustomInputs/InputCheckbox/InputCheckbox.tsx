import { useEffect, useState } from 'react';

import { InputsProp, MessageProps } from 'src/models';
import { MessageInput } from 'src/';

import './InputCheckbox.scss';

export function InputCheckbox({
    type,
    placeholder,
    isRequired,
    UiCustomeInput,
    handleChangeValue,
}: InputsProp): JSX.Element {

    const [{message, status}, setMessage] = useState<MessageProps>({
        message: '',
        status: '',
    });

    useEffect(() => {
        if(!message || !status) return;

        setMessage({
            message: 'hola',
            status: 'success',
        });

    }, [message, status]);

    return (
        <div className='sh_input'>
            <div className='sh_input--checkbox'>
                <input 
                    type={type}  
                    placeholder={placeholder} 
                    required={isRequired}
                    onInput={(event: React.ChangeEvent<HTMLInputElement> ) => handleChangeValue(event.target.value)}
                    data-testid='sh_input--checkbox'
                    id={UiCustomeInput}
                />
                <label htmlFor={UiCustomeInput} >{placeholder}</label>
            </div>
            <MessageInput message={message} status={status}/>
        </div>
    )
}