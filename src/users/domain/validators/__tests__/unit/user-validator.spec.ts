import { userDataBuilder } from '@/users/domain/entities/testing/helpers/user-data-builder'
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user-validator'
import { UserProps } from '@/users/domain/entities/user.entity'

let sut: UserValidator
let props: UserProps

describe('UserValidator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create()
    props = userDataBuilder({})
  })

  describe('Name field validation', () => {
    it('Invalidation cases for name field', () => {
      let isValid = sut.validate(null)

      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
        'name should not be empty',
      ])

      isValid = sut.validate({ ...props, name: '' })

      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual(['name should not be empty'])

      isValid = sut.validate({ ...props, name: 10 as any })

      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ])

      isValid = sut.validate({ ...props, name: 'a'.repeat(256) })

      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ])
    })

    it('should valid case for name field', () => {
      const props = userDataBuilder({})

      const isValid = sut.validate(props)

      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('Email field validation', () => {
    it('Invalidation cases for email field', () => {
      let isValid = sut.validate(null)

      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
        'email should not be empty',
      ])

      isValid = sut.validate({ ...props, email: '' })

      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email should not be empty',
      ])

      isValid = sut.validate({ ...props, email: 10 as any })

      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ])

      isValid = sut.validate({ ...props, email: 'a'.repeat(256) })

      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ])
    })

    it('should valid case for email field', () => {
      const props = userDataBuilder({})

      const isValid = sut.validate(props)

      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('Password field validation', () => {
    it('Invalidation cases for password field', () => {
      let isValid = sut.validate(null)
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be shorter than or equal to 100 characters',
        'password must be longer than or equal to 6 characters',
        'password must be a string',
        'password should not be empty',
      ])

      isValid = sut.validate({ ...props, password: '' })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be longer than or equal to 6 characters',
        'password should not be empty',
      ])

      isValid = sut.validate({ ...props, password: 10 as any })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be shorter than or equal to 100 characters',
        'password must be longer than or equal to 6 characters',
        'password must be a string',
      ])

      isValid = sut.validate({
        ...props,
        password: 'a'.repeat(256),
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be shorter than or equal to 100 characters',
      ])
    })

    it('should valid case for password field', () => {
      const props = userDataBuilder({})

      const isValid = sut.validate(props)

      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('CreateAt field Validation', () => {
    it('Invalidation cases for createdAt field', () => {
      let isValid = sut.validate({
        ...props,
        createdAt: 10 as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['createdAt']).toStrictEqual([
        'createdAt must be a Date instance',
      ])

      isValid = sut.validate({
        ...props,
        createdAt: '2023' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['createdAt']).toStrictEqual([
        'createdAt must be a Date instance',
      ])
    })
  })
})
