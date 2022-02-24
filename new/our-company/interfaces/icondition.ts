export interface ICondition<T> {
  isValid(item: T): boolean;
}
