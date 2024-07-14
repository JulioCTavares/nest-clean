import { Entity } from '../../entity'
import validator from 'validator'

import {} from 'node:crypto'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = {
      prop1: 'prop1',
      prop2: 123,
    }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).toBeDefined()
    expect(validator.isUUID(entity._id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const props = {
      prop1: 'prop1',
      prop2: 123,
    }
    const id = 'aaf3aeea-6c11-4266-a569-0bbbdc73033f'

    const entity = new StubEntity(props, id)

    expect(validator.isUUID(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('should convert a entity to a javascript object', () => {
    const props = {
      prop1: 'prop1',
      prop2: 123,
    }
    const id = 'aaf3aeea-6c11-4266-a569-0bbbdc73033f'

    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
