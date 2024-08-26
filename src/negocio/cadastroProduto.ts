import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    // CRUD (Create, Read, Update e Delete)
    // Create:
    public cadastrar(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preco do produto: `);
        let id = this.produtos.length + 1;
        let produto = new Produto(id, nome, preco);
        this.produtos.push(produto);
        console.log(`\nCadastro concluído!\n`);
    }

    // Read:
    public consultar(): void {
        console.log(`\nConsulta de produto`);   
        let index = this.entrada.receberNumero(`Por favor informe o índice do produto: `);

        if(index < 1 || index > this.produtos.length) {
            console.log(`\nProduto não encontrado.\n`);
        } else {
            let produto = this.produtos[index-1];
            console.log(`\nInformações do produto:`);
            console.log(`ID: ${produto.getId}`);
            console.log(`Produto: ${produto.getNome}`);
            console.log(`Preço: R$ ${produto.getPreco.toFixed(2)}`);
            console.log(`\nConsulta concluída.\n`);
        }
    }

    // Update:
    public atualizar(): void {
        console.log(`\nInício da atualização do produto`);
        let index = this.entrada.receberNumero(`Por favor informe o índice do produto: `);

        if(index < 1 || index > this.produtos.length) {
            console.log(`\nProduto não encontrado.\n`);
            return;
        }

        let produto = this.produtos[index-1];
        let novoNome = this.entrada.receberTexto(`Novo Nome (deixe em branco para manter ${produto.getNome}): `);
        let novoPreco = this.entrada.receberNumero(`Novo Preço (deixe em branco para manter R$ ${produto.getPreco.toFixed(2)}): `);

        if (novoNome) produto.setNome = novoNome;
        if (novoPreco) produto.setPreco = novoPreco;

        console.log(`\nAtualização concluída!\n`);
    }

    // Delete:
    public remover(): void {
        console.log(`\nInício da remoção do produto`);
        let index = this.entrada.receberNumero(`Por favor informe o índice do produto: `);

        if(index < 1 || index > this.produtos.length) {
            console.log(`\nProduto não encontrado.\n`);
        } else {
            this.produtos.splice(index-1, 1);
            console.log(`\nProduto removido com sucesso!\n`);
        }
    }

}