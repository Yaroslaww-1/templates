import { ClassValidator } from '@core/common/class-validator/class-validator';
import { ClassValidationError } from '@core/common/errors/class-validation.error';
import { EntityValidationError } from '@core/common/errors/entity-validation.error';
import { Throwable } from '../errors/throwable';

export class Entity {
  public async validate(): Promise<void | Throwable<EntityValidationError>> {
    try {
      await ClassValidator.validate(this);
    } catch (error) {
      if (error instanceof ClassValidationError) {
        throw new EntityValidationError(error.message);
      } else {
        throw new EntityValidationError('unrecognized entity validation error');
      }
    }
  }
}
