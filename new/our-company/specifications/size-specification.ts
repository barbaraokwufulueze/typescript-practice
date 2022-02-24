import { Size } from "../enums";
import { ICondition } from "../interfaces/icondition";
import { ISizable } from "../interfaces/isizable";

export default class SizeSpecification implements ICondition<ISizable> {
  private readonly size: Size;

  constructor(size: Size) {
    this.size = size;
  }

  isValid(item: ISizable): boolean {
    return item.getSize() === this.size;
  }
}
