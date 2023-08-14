import { InputsProp } from 'src/models';

export interface WrapperInputProps extends InputsProp {
    label?: string,
    className?: string,
    error?: boolean,
    errorMessage?: string,
    done?: boolean,
}