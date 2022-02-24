import { Colour, Size } from "./enums";
import { IFilterable } from "./interfaces/ifilterable";

export default class Filterable implements IFilterable {
  private readonly name: string;
  private readonly colour: Colour;
  private readonly size: Size;

  constructor(colour: Colour, name: string, size: Size) {
    this.colour = colour;
    this.name = name;
    this.size = size;
  }

  getColour(): Colour {
    return this.colour;
  }

  getSize(): Size {
    return this.size;
  }

  getName(): string {
    return this.name;
  }
}
