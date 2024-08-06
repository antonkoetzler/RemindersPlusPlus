import { UnimplementedError } from '../misc/Errors';
import { JSON } from '../types';

/** Abstract that every model must extend */
export default abstract class Model {
  static fromJson(json: JSON): Model { throw new UnimplementedError(); }
  abstract toJson(): JSON;
  abstract copyWith({ }): Model;
  abstract toString(): string;
}