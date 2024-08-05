import { JSON } from '../types';

/** Abstract that every model must extend */
export default abstract class Model {
  toJson?(): JSON;
  abstract toString(): string;
}