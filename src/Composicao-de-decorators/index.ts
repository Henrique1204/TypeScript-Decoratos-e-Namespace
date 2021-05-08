type Constructor = new (...args: any[]) => any;

function inverterCor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T) {
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

function outroDecorador(target: Constructor) {
  console.log('Sou o outro decorador');
  return target;
}

@outroDecorador // 2 a ser chamado
@inverterCor('Valor 1', 'Valor 2') // 1 a ser chamado
export class Animal {
  constructor(public cor: string) {}
}

const animal = new Animal('Marrom');
console.log(animal);
