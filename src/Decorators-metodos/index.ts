function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number
  ) {}

  public get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  public set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();

    if (primeiroNome.length) {
      this.nome = palavras[0];
      this.sobrenome = palavras[1];
    }
  }

  @decorador
  public metodo(msg: string): string {
    return `${this.nomeCompleto}: ${msg}`;
  }
}

const pessoa = new UmaPessoa('Paulo', 'Souza', 30);
const metodo = pessoa.metodo('Olá');
console.log(metodo);
