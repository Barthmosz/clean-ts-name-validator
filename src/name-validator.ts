export class NameValidator {
    /**
     * @summary Validates a name.
     * @description The name cannot contain numbers or special characters, and it must be between the minimum and maximum value, which can be passed in the second and third parameter, respectively.
     * @param {string} name
     * @param {number} minLength
     * @param {number} maxLength
     * @returns {boolean}
    */
    static validate(name: string, minLength: number = 3, maxLength: number = 12): boolean {
        return new RegExp(`^[A-za-z]{${minLength},${maxLength}}$`).test(name)
    }
}
