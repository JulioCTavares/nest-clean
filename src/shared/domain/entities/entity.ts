import { randomUUID } from 'node:crypto'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly props: Props

  constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID().toString()
    this.props = props
  }

  get id() {
    return this.id
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & Props>
  }
}
