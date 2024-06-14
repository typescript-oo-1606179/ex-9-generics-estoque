// type EstoqueType<TItem> = {
//   items: TItem[];
// };

interface ItemEstoque {
  nome: string;
  [key: string]: any;
}

interface Estoque<TItens extends ItemEstoque = { nome: string }> {
  nomeEmpresa: string;
  itens: TItens[];
}

interface Produto {
  readonly id: number;
  nome: string;
}

console.log("Estoque de produtos");

const estoqueProduto: Estoque<Produto> = {
  nomeEmpresa: "Venda do Carlos",
  itens: [],
};

console.log("🚀 ~ estoque:", estoqueProduto);

function addProduto(novoProduto: Produto): number {
  const novoTamanho = estoqueProduto.itens.push(novoProduto);

  return novoTamanho;
}

const torneira: Produto = {
  id: 1,
  nome: "Torneira",
};

addProduto(torneira);

const teclado: Produto = {
  id: 2,
  nome: "teclado",
};

addProduto(teclado);

console.log("🚀 ~ estoque:", estoqueProduto);

console.log("Estoque de usuários");

interface Usuario {
  readonly id: number;
  cpf: string;
  nome: string;
}

const estoqueDeUsuarios: Estoque<Usuario> = {
  nomeEmpresa: "Users Selers",
  itens: [],
};
console.log("🚀 ~ estoqueDeUsuarios:", estoqueDeUsuarios);

function addUsuario(novoUsuario: Usuario): number {
  return estoqueDeUsuarios.itens.push(novoUsuario);
}

addUsuario({ id: 1, cpf: "123456", nome: "Fulano" });
addUsuario({ id: 2, cpf: "asdasd", nome: "Siclano" });
addUsuario({ id: 3, cpf: "134123", nome: "Luciel" });

console.log("🚀 ~ estoqueDeUsuarios:", estoqueDeUsuarios);

console.log("Apresenta estoque");

function apresentaEstoque(estoqueApresenta: Estoque): void {
  console.log("A empresa: ", estoqueApresenta.nomeEmpresa);
  console.log(
    "Possui o seguinte estoque: ",
    estoqueApresenta.itens.map((item) => item.nome).join(", ")
  );
}

addProduto({ id: 3, nome: "Monitor" });

apresentaEstoque(estoqueProduto);
apresentaEstoque(estoqueDeUsuarios);
