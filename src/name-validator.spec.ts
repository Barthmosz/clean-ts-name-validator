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
})
