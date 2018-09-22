import { FormGroup } from '@angular/forms'

export interface FormCardData {
    title: string,
    formGroup: FormGroup,
    controlData: ControlData[],
    submitButtonData: ButtonData,
    cancelButtonData: ButtonData
}

export interface ControlData {
    title: string,
    hint: string,
    key: string
}

export interface ButtonData {
    action: Function,
    title: string
}
