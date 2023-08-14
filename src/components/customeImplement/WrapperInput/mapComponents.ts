import { CustomInput } from "src"
import { WrapperInputProps } from "./models/WrapperInputProps"

export const mapComponents: {
    [key: string]: (props: WrapperInputProps) => JSX.Element
} = {
    'text': CustomInput.InputText,
    'checkbox': CustomInput.InputCheckbox,
    'radio': CustomInput.InputRadio,
    'file': CustomInput.InputFile,
    'textarea': CustomInput.InputTextarea,
}