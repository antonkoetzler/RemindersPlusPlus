/** File for different types of error messages */
export class UnimplementedError extends Error {
  constructor(message?: string) {
    super(`Unimplemented error: ${message}`);
  }
}