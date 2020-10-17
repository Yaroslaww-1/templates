export class ClassValidationError extends Error {
  constructor(reason: string) {
    super(reason);
  }
}
