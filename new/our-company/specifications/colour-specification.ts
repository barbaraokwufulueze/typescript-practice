import { Colour } from "../enums";
import { IColourable, ICondition } from "../interfaces";

export default class ColourSpecification implements ICondition<IColourable> {
  private readonly colour: Colour;

  constructor(colour: Colour) {
    this.colour = colour;
  }

  isValid(item: IColourable): boolean {
    return item.getColour() === this.colour;
  }
}
