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

interface IFilterable extends IColourable, ISizable, INamable {
  toArray<T>(item: Iterable<T>): T[];
}

interface ICondition<T> {
  isValid(item: T);
}

interface IFilter<T> {
  search(items: Array<T>, condition: ICondition<T>): Iterable<T>;
}

export { IColourable, ICondition, IFilter, IFilterable, INamable, ISizable };
