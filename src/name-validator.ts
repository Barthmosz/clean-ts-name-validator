export class NameValidator {
    /**
     * Validates a name.
     * @param {string} name
     * @param {number} minLength
     * @param {number} maxLength
     * @returns {boolean}
    */
    static validate(name: string, minLength: number = 3, maxLength: number = 12): boolean {
        return new RegExp(`^[A-za-z]{${minLength},${maxLength}}$`).test(name)
    }
}
