import { Throwable } from '../errors/throwable';
import { EntityValidationError } from '../errors/entity-validation.error';

export interface EditableEntity<P, T, E extends Error = EntityValidationError> {
  edit(payload: P): Promise<T | Throwable<E>>;
}
