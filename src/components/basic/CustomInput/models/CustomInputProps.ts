export interface CustomInputProps {
    label?: string,
    type: string,
    placeholder?: string,
    className?: string,
    error?: boolean,
    errorMessage?: string,
    isRequired?: boolean,
    noRisize?: boolean,
    done?: boolean,
    handleChangeValue: (event: string) => void;
}