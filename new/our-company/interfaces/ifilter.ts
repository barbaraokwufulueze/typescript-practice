import { ICondition } from "./icondition";

export interface IFilter<T> {
  getItems(items: Array<T>, condition: ICondition<T>);
}
