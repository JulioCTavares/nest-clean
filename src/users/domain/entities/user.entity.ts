import { Entity } from '@/shared/domain/entities/entity'

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
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updateName(value: string) {
    this.name = value
  }

  updatePassword(value: string) {
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
}
