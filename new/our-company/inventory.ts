export default class Inventory<T> {
  items: Array<T> = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    // Remove shoe
  }

  getSize() {
    return this.items.length;
  }
}
