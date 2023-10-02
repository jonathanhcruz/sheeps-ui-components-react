export interface ValidInputProps {
    data: string;
    type: string;
    regex?: RegExp;
}

export interface ValidInputReturn {
    data: unknown;
    type: string;
    isValid: boolean;
}