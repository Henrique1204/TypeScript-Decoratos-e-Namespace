function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;

  return {
    get: (): any => valorPropriedade,
    set: (valor: any) => {
      valorPropriedade = valor.split('').reverse().join('');
    },
  };
}

export class UmaPessoa {
  @decorador
  private nome: string;
  private sobrenome: string;
  private idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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

  public metodo(msg: string): string {
    return `${this.nomeCompleto}: ${msg}`;
  }
}

const pessoa = new UmaPessoa('Paulo', 'Souza', 19);
console.log(pessoa.nomeCompleto);
