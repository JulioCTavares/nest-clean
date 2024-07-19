import { Entity } from '@/shared/domain/entities/entity'
import { UserValidatorFactory } from '../validators/user-validator'
import { EntityValidationError } from '@/shared/domain/errors/validation-errors'

export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validate(props)
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updateName(value: string) {
    UserEntity.validate({ ...this.props, name: value })
    this.name = value
  }

  updatePassword(value: string) {
    UserEntity.validate({ ...this.props, password: value })
    this.password = value
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get createdAt() {
    return this.props.createdAt
  }

  private set name(value: string) {
    this.props.name = value
  }

  private set password(value: string) {
    this.props.password = value
  }

  static validate(props: UserProps) {
    const validator = UserValidatorFactory.create()
    const isValid = validator.validate(props)

    if (!isValid) {
      throw new EntityValidationError(validator.errors)
    }
  }
}
