import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { ClassValidatorFields } from '../../class-validator-fields'

class StubRules {
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  price: number

  constructor(data: any) {
    Object.assign(this, data)
  }
}

class StubClassValidatorFields extends ClassValidatorFields<StubRules> {
  validate(data: any): boolean {
    return super.validate(new StubRules(data))
  }
}

describe('ClassValidatorFields integration tests', () => {
  it('should validate with errors', () => {
    const validator = new StubClassValidatorFields()

    expect(validator.validate(null)).toBeFalsy()
    expect(validator.errors).toStrictEqual({
      name: [
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
        'name should not be empty',
      ],
      price: [
        'price must be a number conforming to the specified constraints',
        'price should not be empty',
      ],
    })
  })

  it('should validate without errors', () => {
    const validator = new StubClassValidatorFields()

    expect(validator.validate({ name: 'value', price: 10 })).toBeTruthy()
    expect(validator.validatedData).toStrictEqual(
      new StubRules({ name: 'value', price: 10 }),
    )
  })
})
