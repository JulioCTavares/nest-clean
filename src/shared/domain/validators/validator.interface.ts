export type FieldErrors = {
  [fieldName: string]: string[]
}

export interface ValidatorFields<PropsValidation> {
  errors: FieldErrors
  validatedData: PropsValidation
  validate(data: any): boolean
}
