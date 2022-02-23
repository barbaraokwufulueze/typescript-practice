import { Colour, Size } from "../new/our-company/enums";
import Inventory from "../new/our-company/inventory";
import Shoe from "../new/our-company/filterable";

export default class Adidas {
  public static run(): void {
    const shoes: Array<Shoe> = [
      new Shoe(Colour.Red, "ADDS1", Size.Large),
      new Shoe(Colour.Blue, "ADDS2", Size.Small),
      new Shoe(Colour.Green, "ADDS3", Size.Small),
      new Shoe(Colour.Green, "ADDS4", Size.XL),
      new Shoe(Colour.Red, "ADDS4", Size.Large),
      new Shoe(Colour.Blue, "ADDS5", Size.XXL),
      new Shoe(Colour.Red, "ADDS5", Size.Small),
    ];

    const inventory: Inventory<Shoe> = new Inventory();
    shoes.forEach((shoe) => {
      inventory.add(shoe);
    });

    // show shoes
    console.log(`At Adidas, we've got ${inventory.getSize()} new shoes`);

    // search inventory
    // const redShoes = inventory.getShoeByColor("Red");
    // redShoes.forEach((redShoe) => console.log(redShoe));

    // const bigShoes = inventory.getShoeBySize(40);
    // bigShoes.forEach((bigShoe) => console.log(bigShoe));

    // const adds4Shoes = inventory.getShoeByName("ADDS4");
    // adds4Shoes.forEach((adds4Shoe) => console.log(adds4Shoe));
  }
}
