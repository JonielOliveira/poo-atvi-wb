import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";

export default function telaServico(cliente: Cliente) {
    
    console.log(`Bem-vindo ao cadastro de Servicos`);
    let execucao = true;

    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar Serviço`);
        console.log(`2 - Listar todos os Serviços`);
        console.log(`3 - Remover Serviço`);
        console.log(`4 - Atualizar Serviço`);
        console.log(`5 - Consultar Serviço`);
        console.log(`0 - Sair`);

        let entrada = new Entrada();
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

        let cadastro = new CadastroServico(cliente.getServicosConsumidos);
        let listagem = new ListagemServicos(cliente.getServicosConsumidos);

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