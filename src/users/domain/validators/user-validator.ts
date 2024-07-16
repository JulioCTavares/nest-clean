import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'
import { UserProps } from '../entities/user.entity'
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'

export class UserRules {
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  name: string

  @IsNotEmpty()
  @MaxLength(255)
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(100)
  password: string

  @IsOptional()
  @IsDate()
  createdAt?: Date

  constructor({ email, name, password, createdAt }: UserProps) {
    Object.assign(this, { email, name, password, createdAt })
  }
}

export class UserValidator extends ClassValidatorFields<UserRules> {
  validate(data: UserProps): boolean {
    return super.validate(new UserRules(data ?? ({} as UserProps)))
  }
}

export class UserValidatorFactory {
  static create(): UserValidator {
    return new UserValidator()
  }
}
