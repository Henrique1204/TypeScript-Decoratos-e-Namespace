function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
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

  public metodo(@decorador msg: string): string {
    return `${this.nomeCompleto}: ${msg}`;
  }
}
