import { Entity } from '../entities/entity'

export interface RepositoryInterface<E extends Entity> {
  save(entity: E): Promise<void>
  findById(id: string): Promise<E>
  findAll(): Promise<E[]>
  update(entity: E): Promise<void>
  delete(entity: E): Promise<void>
}
