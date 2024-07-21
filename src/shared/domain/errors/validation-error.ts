import { FieldErrors } from '../validators/validator.interface'

export class ValidationError extends Error {}

export class EntityValidationError extends Error {
  constructor(public error: FieldErrors) {
    super('Entity Validation Error')
    this.name = 'EntityValidationError'
  }
}
