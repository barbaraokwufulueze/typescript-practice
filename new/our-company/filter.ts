import { ICondition, IFilter, IFilterable } from "./interfaces";

export default class Filter implements IFilter<IFilterable> {
  private static *search<IFilterable>(
    items: Array<IFilterable>,
    condition: ICondition<IFilterable>
  ): Iterable<IFilterable> {
    for (let item of items) {
      if (condition.isValid(item)) yield item;
    }
  }

  static toArray<T>(items: Iterable<T>): T[] {
    return [...items];
  }

  getItems(
    items: Array<IFilterable>,
    condition: ICondition<IFilterable>
  ): IFilterable[] {
    return Filter.toArray(Filter.search<IFilterable>(items, condition));
  }
}
