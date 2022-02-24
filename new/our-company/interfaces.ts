import { Colour, Size } from "./enums";

interface IColourable {
  getColour(): Colour;
}

interface ISizable {
  getSize(): Size;
}

interface INamable {
  getName(): string;
}

interface IFilterable extends IColourable, ISizable, INamable {}

interface ICondition<IFilterable> {
  isValid(item: IFilterable): boolean;
}

interface IFilter<IFilterable> {
  getItems(items: Array<IFilterable>, condition: ICondition<IFilterable>);
}

export { IColourable, ICondition, IFilter, IFilterable, INamable, ISizable };
