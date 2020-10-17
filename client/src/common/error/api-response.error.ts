export class ApiResponseError extends Error {
  constructor(reason: string = 'api call returned null') {
    super(reason);
  }
}
