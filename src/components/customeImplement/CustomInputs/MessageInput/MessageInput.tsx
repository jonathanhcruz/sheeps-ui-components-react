import { useState, useEffect } from 'react'

import { MessageInputProps } from './models'

import { statusConst } from './constans/statusConst'

import './MessageInput.scss'


export function MessageInput({
    message,
    status,
    time
}: MessageInputProps ): JSX.Element {
    

    const [ isNotHidden, setIsNotHidden ] = useState<boolean>(false)
    
    useEffect(() => {
        if(!statusConst[status]) return;
        setIsNotHidden(true);

        if(!time) return;

        const timer = setTimeout(() => {
            setIsNotHidden(false);
        }, time ?? 3000);

        return () => {
            setIsNotHidden(false);
            clearTimeout(timer);
        }
    }, [status])


    return (
        <span 
            className={`sh-message-input ${statusConst[status] ?? ''} ${!isNotHidden ? 'hidden' : '' }`}
            data-testid='sh-message-input'
        >
            { message }
        </span>
    )
}