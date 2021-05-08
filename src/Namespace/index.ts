/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  const nome = 'Paulo';

  export class PessoaNS {
    constructor(public nome: string) {}
  }

  const pessoaNS = new PessoaNS(nome);
  console.log(pessoaNS);
}

const pessoaNS = new MeuNamespace.PessoaNS('Henrique');
console.log(pessoaNS);
