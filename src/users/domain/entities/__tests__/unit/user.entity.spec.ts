import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'
import { userDataBuilder } from '../../testing/helpers/user-data-builder'
import { vi } from 'vitest'

describe('User Entity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    UserEntity.validate = vi.fn()
    props = userDataBuilder({})

    sut = new UserEntity(props)
  })

  it('Constructor Method', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should return name field', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('should return email field', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('should return password field', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('should return createdAt field', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it('should update name field', () => {
    sut.updateName('other name')

    expect(UserEntity.validate).toHaveBeenCalled()
    expect(sut.name).toEqual('other name')
  })

  it('should update password field', () => {
    sut.updatePassword('new password')

    expect(UserEntity.validate).toHaveBeenCalled()
    expect(sut.password).toEqual('new password')
  })
})
