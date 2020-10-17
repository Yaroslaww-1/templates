export class EntityValidationError extends Error {
  constructor(reason: string) {
    super(reason);
  }
}
