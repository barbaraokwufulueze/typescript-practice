import { Colour, Size } from "../new/our-company/enums";
import Furniture from "../new/our-company/filterable";
import Inventory from "../new/our-company/inventory";

export default class Ikea {
  public static run(): void {
    const furnitureItems: Array<Furniture> = [
      new Furniture(Colour.Red, "IKEA-100", Size.Small),
      new Furniture(Colour.Green, "IKEA-200", Size.Large),
      new Furniture(Colour.Blue, "IKEA-300", Size.Small),
    ];

    const inventory: Inventory<Furniture> = new Inventory();
    furnitureItems.forEach((furniture) => {
      inventory.add(furniture);
    });

    // show shoes
    console.log(
      `At IKEA, we've got ${inventory.getSize()} new furniture items`
    );
  }
}
