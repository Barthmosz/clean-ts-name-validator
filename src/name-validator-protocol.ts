export interface Validator {
    validate: (name: string, minLength?: number, maxLength?: number) => boolean
}
