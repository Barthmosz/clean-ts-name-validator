export class NameValidator {
    static validate(name: string): boolean {
        const nameRegex = /^[A-za-z]{3,10}$/g
        return nameRegex.test(name)
    }
}
