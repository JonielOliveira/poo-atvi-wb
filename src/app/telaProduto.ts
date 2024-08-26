import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";

export default function telaProduto(cliente: Cliente) {
    
    console.log(`Bem-vindo ao cadastro de Produtos`);
    let execucao = true;

    while (execucao) {
        console.log(`Opções:`);
        
        console.log(`1 - Cadastrar Produto`);
        console.log(`2 - Listar todos os Produtos`);
        console.log(`3 - Remover Produto`);
        console.log(`4 - Atualizar Produto`);
        console.log(`5 - Consultar Produto`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        let cadastro = new CadastroProduto(cliente.getProdutosConsumidos);
        let listagem = new ListagemProdutos(cliente.getProdutosConsumidos);

        switch (opcao) {
            case 1:
                cadastro.cadastrar();
                break;
            case 2:
                listagem.listar();
                break;
            case 3:
                cadastro.remover();
                break;
            case 4:
                cadastro.atualizar();
                break;
            case 5:
                cadastro.consultar();
                break;
            case 0:
                execucao = false;
                console.log(`Até mais`);
                break;
            default:
                console.log(`Operação inválida!`);
        }
    }

}