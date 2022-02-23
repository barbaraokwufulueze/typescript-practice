import { ICondition, IFilter } from "./interfaces";

export default class Filter<T> implements IFilter<T> {
  *search(items: Array<T>, condition: ICondition<T>): Iterable<T> {
    for (let item of items) {
      if (condition.isValid(item)) yield item;
    }
  }
}
