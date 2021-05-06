function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    public cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
    }
  };
}

@decorator
export class Animal {
  constructor(public cor: string) {}
}

const animal = new Animal('Marrom');
console.log(animal);
