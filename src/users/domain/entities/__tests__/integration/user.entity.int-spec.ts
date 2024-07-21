import { EntityValidationError } from '@/shared/domain/errors/validation-errors'
import { userDataBuilder } from '../../testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'

describe('UserEntity integration tests', () => {
  describe('Constructor method', () => {
    it('should throw an error when creating a user with an invalid name', () => {
      let props = {
        ...userDataBuilder({}),
        name: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with an invalid email', () => {
      let props = {
        ...userDataBuilder({}),
        email: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        email: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        email: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with an invalid password', () => {
      let props = {
        ...userDataBuilder({}),
        password: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        password: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        password: 'a'.repeat(101),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with an invalid createAt', () => {
      let props = {
        ...userDataBuilder({}),
        password: '2023',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: UserProps = {
        ...userDataBuilder({}),
      }
      new UserEntity(props)
    })
  })

  describe('UpdateName method', () => {
    it('Should throw an error when update a user with invalid name', () => {
      const entity = new UserEntity(userDataBuilder({}))
      expect(() => entity.updateName(null)).toThrow(EntityValidationError)
      expect(() => entity.updateName('')).toThrow(EntityValidationError)
      expect(() => entity.updateName(10 as any)).toThrow(EntityValidationError)
      expect(() => entity.updateName('a'.repeat(256))).toThrow(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: UserProps = {
        ...userDataBuilder({}),
      }

      const entity = new UserEntity(props)
      entity.updateName('other name')
    })
  })

  describe('UpdatePassword method', () => {
    it('Should a invalid user using password field', () => {
      const entity = new UserEntity(userDataBuilder({}))
      expect(() => entity.updatePassword(null)).toThrow(EntityValidationError)
      expect(() => entity.updatePassword('')).toThrow(EntityValidationError)
      expect(() => entity.updatePassword(10 as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('a'.repeat(101))).toThrow(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: UserProps = {
        ...userDataBuilder({}),
      }

      const entity = new UserEntity(props)
      entity.updatePassword('other password')
    })
  })
})
