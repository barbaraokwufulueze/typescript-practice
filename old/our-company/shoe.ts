export default class Shoe {
  private size: number;
  private color: string;
  private name: string;

  constructor(size: number, color: string, name: string) {
    this.size = size;
    this.color = color;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getColor(): string {
    return this.color;
  }

  public getSize(): number {
    return this.size;
  }
}
