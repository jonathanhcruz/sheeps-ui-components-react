import { useState, useEffect } from 'react';

// model
import { ValidInputProps, ValidInputReturn } from './models';
// regexs
import { typeRegex } from './helper/typeRegex';


export function useValidFormInput ({
    data,
    type,
    regex = new RegExp('')
}: ValidInputProps): ValidInputReturn{
    const [valid, setValid] = useState<boolean>(false);

    useEffect(() => {
        if (!data || !type) {
            setValid(false);
            return;
        }

        if(!regex) {
            setValid(typeRegex?.[type]?.test(data) || false);
            return;
        }

        setValid(regex.test(data));
        
    }, [data, type, regex]);

    return {
        data: data,
        type: type,
        isValid: valid
    };
}