import { validate, ValidationError } from 'class-validator';
import { Throwable } from '../errors/throwable';
import { ClassValidationError } from '../errors/class-validation.error';

export class ClassValidator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public static async validate<T extends object>(target: T): Promise<void | Throwable<ClassValidationError>> {
    const errors: ValidationError[] = await validate(target);

    if (errors.length > 0) {
      throw new ClassValidationError(
        errors.map(error => (error.constraints ? JSON.stringify(Object.values(error.constraints)) : '')).join(','),
      );
    }
  }
}
