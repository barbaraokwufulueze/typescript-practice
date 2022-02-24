import { IColourable } from "./icolourable";
import { INamable } from "./inamable";
import { ISizable } from "./isizable";

export interface IFilterable extends IColourable, ISizable, INamable {}
