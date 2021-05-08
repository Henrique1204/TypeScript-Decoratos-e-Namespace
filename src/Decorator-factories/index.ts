function inverterCor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      public cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = `${args[0]
          .split('')
          .reverse()
          .join('')} ${param1} ${param2}`;
      }
    };
  };
}

@inverterCor('Valor 1', 'Valor 2')
export class Animal {
  constructor(public cor: string) {}
}

const animal = new Animal('Marrom');
console.log(animal);
