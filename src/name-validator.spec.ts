import { NameValidator } from './name-validator'
import { type Validator } from './name-validator-protocol'

const makeSut = (): Validator => {
    const sut = NameValidator
    return sut
}

describe('Name Validator', () => {
    test('should return false if a name with special characters and numbers is provided', () => {
        const sut = makeSut()
        expect(sut.validate('Joe#1')).toBe(false)
    })

    test('should return false if a name with less than the default min length is provided', () => {
        const sut = makeSut()
        expect(sut.validate('J')).toBe(false)
    })

    test('should return false if a name with less than the min length is provided', () => {
        const sut = makeSut()
        expect(sut.validate('Joe', 4, 5)).toBe(false)
    })

    test('should return false if a name with more than the default max length is provided', () => {
        const sut = makeSut()
        expect(sut.validate('JoeJoeJoeJoeJ')).toBe(false)
    })
})
