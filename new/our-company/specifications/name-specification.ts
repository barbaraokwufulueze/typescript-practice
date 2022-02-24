import { ICondition, INamable } from "../interfaces";

export default class NameSpecification implements ICondition<INamable> {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  isValid(item: INamable): boolean {
    return item.getName() === this.name;
  }
}
