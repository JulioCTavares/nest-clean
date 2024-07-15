import { validateSync } from 'class-validator'
import { FieldErrors, ValidatorFields } from './validator.interface'

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFields<PropsValidated>
{
  errors: FieldErrors = null
  validatedData: PropsValidated = null
  validate(data: any): boolean {
    const errors = validateSync(data)
    this.errors = errors.length
      ? errors.reduce((acc, error) => {
          acc[error.property] = Object.values(error.constraints)
          return acc
        }, {})
      : null

    this.validatedData = errors.length ? null : data
    return !errors.length
  }
}
