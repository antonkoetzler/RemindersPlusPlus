/** Interface that all services must extend from */
export default interface CrudService<T> {
  create(): T | null;
  get(): T | null;
  select(): T[];
  update(): T | null;
  delete(): boolean;
}