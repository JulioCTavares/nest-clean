import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'

describe('User Entity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    sut = new UserEntity(props)
  })

  it('Constructor Method', () => {
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
})