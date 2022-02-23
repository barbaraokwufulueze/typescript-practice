import Shoe from "./shoe";

export default class Inventory {
  shoes: Array<Shoe> = []; // shoes: Shoe[];

  add(shoe: Shoe): void {
    this.shoes.push(shoe);
  }

  remove(shoe: Shoe): void {
    // Remove shoe
  }

  getShoeByName(name: string) {
    return this.shoes.filter((shoe) => shoe.getName() === name);
  }

  getShoeByColor(color: string) {
    return this.shoes.filter((shoe) => shoe.getColor() === color);
  }

  getShoeBySize(size: number) {
    return this.shoes.filter((shoe) => shoe.getSize() === size);
  }

  getSize() {
    return this.shoes.length;
  }
}
