import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CadastroTelefone from "../negocio/cadastroTelefone";
import ListagemTelefones from "../negocio/listagemTelefones";

export default function telaTelefones(cliente: Cliente) {
    
    console.log(`Bem-vindo ao cadastro de telefones`);
    let execucao = true;

    while (execucao) {
        console.log(`Opções:`);
        
        console.log(`1 - Cadastrar telefone`);
        console.log(`2 - Listar todos os telefones`);
        console.log(`3 - Remover telefone`);
        console.log(`4 - Atualizar telefone`);
        console.log(`5 - Consultar telefone`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        let cadastro = new CadastroTelefone(cliente.getTelefones);
        let listagem = new ListagemTelefones(cliente.getTelefones);

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