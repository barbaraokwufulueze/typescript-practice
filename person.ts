class Person {
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  static run() {
    const amy: Person = new Person("Amy", 3);
    const barbara: Person = new Person("Barbara", 33);
    const daniel: Person = new Person("Daniel", 34);

    console.log(`Persons
      \nName: ${amy.getName()} ::: Age: ${amy.getAge()}
      \nName: ${barbara.getName()} ::: Age: ${barbara.getAge()}
      \nName: ${daniel.getName()} ::: Age: ${daniel.getAge()}
    `);
  }
}

export default Person;
