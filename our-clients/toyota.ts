import { Colour, Size } from "../new/our-company/enums";
import Car from "../new/our-company/filterable";
import Inventory from "../new/our-company/inventory";

export default class Toyota {
  public static run(): void {
    const cars: Array<Car> = [
      new Car(Colour.Purple, "Camry 2010", Size.Small),
      new Car(Colour.White, "Corona 2022", Size.Large),
      new Car(Colour.Purple, "Avenis 2021", Size.Medium),
      new Car(Colour.Yellow, "Rav-4 2020", Size.Small),
    ];

    const inventory: Inventory<Car> = new Inventory();
    cars.forEach((car) => {
      inventory.add(car);
    });

    // show shoes
    console.log(`At Toyota, we've got ${inventory.getSize()} new cars`);
  }
}
