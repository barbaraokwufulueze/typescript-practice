import { ICondition, IFilterable } from "../interfaces";

export default class Specification implements ICondition<IFilterable> {
  conditions: Array<ICondition<IFilterable>>;

  constructor(...conditions: Array<ICondition<IFilterable>>) {
    this.conditions = conditions;
  }

  isValid(item: IFilterable): boolean {
    return this.conditions.every((condition) => condition.isValid(item));
  }
}
