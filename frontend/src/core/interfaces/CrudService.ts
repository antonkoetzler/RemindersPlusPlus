import { JSON } from '../types';

/** Interface that all services must extend from */
export default interface CrudService<T> {
  create(data: T): Promise<T | null> | T | null;
  get(conditions: JSON): Promise<T | null> | T | null;
  select(conditions: JSON): Promise<T[]> | T[];
  update(data: T, conditions: JSON): Promise<T | null> | T | null;
  delete(data: T): Promise<boolean> | boolean;
}