import { Colour, Size } from "../new/our-company/enums";
import Inventory from "../new/our-company/inventory";
import Shoe from "../new/our-company/filterable";
import Filter from "../new/our-company/filter";
import { IFilterable } from "../new/our-company/interfaces";
import ColourSpecification from "../new/our-company/specifications/colour-specification";
import SizeSpecification from "../new/our-company/specifications/size-specification";
import NameSpecification from "../new/our-company/specifications/name-specification";
import Specification from "../new/our-company/specifications/specification";

export default class Adidas {
  public static run(): void {
    const shoes: Array<IFilterable> = [
      new Shoe(Colour.Red, "ADDS1", Size.Large),
      new Shoe(Colour.Blue, "ADDS2", Size.Small),
      new Shoe(Colour.Green, "ADDS3", Size.Small),
      new Shoe(Colour.Green, "ADDS4", Size.XL),
      new Shoe(Colour.Red, "ADDS4", Size.Large),
      new Shoe(Colour.Blue, "ADDS5", Size.XXL),
      new Shoe(Colour.Red, "ADDS5", Size.Medium),
      new Shoe(Colour.Green, "ADDS5", Size.Medium),
      new Shoe(Colour.Blue, "ADDS5", Size.Medium),
      new Shoe(Colour.Green, "ADDS5", Size.XXL),
      new Shoe(Colour.Red, "ADDS5", Size.Small),
      new Shoe(Colour.Red, "ADDS2", Size.Small),
      new Shoe(Colour.Red, "ADDS1", Size.Small),
      new Shoe(Colour.Red, "ADDS3", Size.Small),
      new Shoe(Colour.Red, "ADDS4", Size.Small),
      new Shoe(Colour.Green, "ADDS2", Size.Large),
    ];

    const inventory: Inventory<IFilterable> = new Inventory();
    shoes.forEach((shoe) => {
      inventory.add(shoe);
    });

    // show shoes
    console.log(`At Adidas, we've got ${inventory.getSize()} new shoes`);

    // search inventory

    const filter: Filter = new Filter();

    const redShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new ColourSpecification(Colour.Red)
    );
    const greenShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new ColourSpecification(Colour.Green)
    );
    const blueShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new ColourSpecification(Colour.Blue)
    );

    const largeShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new SizeSpecification(Size.Large)
    );
    const smallShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new SizeSpecification(Size.Small)
    );

    const adds2Shoes: Array<IFilterable> = filter.getItems(
      shoes,
      new NameSpecification("ADDS4")
    );

    this.printShoes({ enum: Colour, enumType: Colour.Red, items: redShoes });
    this.printShoes({
      enum: Colour,
      enumType: Colour.Green,
      items: greenShoes,
    });
    this.printShoes({ enum: Colour, enumType: Colour.Blue, items: blueShoes });
    this.printShoes({ enum: Size, enumType: Size.Large, items: largeShoes });
    this.printShoes({ enum: Size, enumType: Size.Small, items: smallShoes });
    this.printShoes({
      enum: { name: "ADDS4" },
      enumType: "name",
      items: adds2Shoes,
    });

    // Multi Attribute Filter
    const largeRedShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Large),
        new ColourSpecification(Colour.Red)
      )
    );
    const smallRedShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Small),
        new ColourSpecification(Colour.Red)
      )
    );
    const largeBlueShoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Large),
        new ColourSpecification(Colour.Blue)
      )
    );
    const mediumADDS5Shoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Medium),
        new NameSpecification("ADDS5")
      )
    );
    this.printShoes({
      enum: { name: "Large Red Shoes" },
      enumType: "name",
      items: largeRedShoes,
    });
    this.printShoes({
      enum: { name: "Small Red Shoes" },
      enumType: "name",
      items: smallRedShoes,
    });
    this.printShoes({
      enum: { name: "Large Blue Shoes" },
      enumType: "name",
      items: largeBlueShoes,
    });
    this.printShoes({
      enum: { name: "Medium ADDS5 Shoes" },
      enumType: "name",
      items: mediumADDS5Shoes,
    });

    const largeRedADDS5Shoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Large),
        new ColourSpecification(Colour.Red),
        new NameSpecification("ADDS5")
      )
    );
    const smallRedADDS1Shoes: Array<IFilterable> = filter.getItems(
      shoes,
      new Specification(
        new SizeSpecification(Size.Small),
        new ColourSpecification(Colour.Red),
        new NameSpecification("ADDS1")
      )
    );
    this.printShoes({
      enum: { name: "Large Red ADDS5 Shoes" },
      enumType: "name",
      items: largeRedADDS5Shoes,
    });
    this.printShoes({
      enum: { name: "Small Red ADDS1 Shoes" },
      enumType: "name",
      items: smallRedADDS1Shoes,
    });
  }

  public static printShoes(params: { [k: string]: any }) {
    console.log(`\n${params.enum[params.enumType]}:\n`);
    params.items.forEach((item: Shoe) =>
      console.log(
        `${item.getName()} : ${Colour[item.getColour()]} : ${
          Size[item.getSize()]
        }\n`
      )
    );
  }
}
