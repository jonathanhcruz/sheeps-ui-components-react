export interface InputsProp {
    type: string,
    placeholder?: string,
    isRequired?: boolean,
    UiCustomeInput?: string
    noRisize?: boolean,
    options?: string[],
    handleChangeValue: (event: string) => void;
}