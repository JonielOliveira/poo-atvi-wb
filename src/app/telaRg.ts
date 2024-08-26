import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CadastroRg from "../negocio/cadastroRg";
import ListagemRgs from "../negocio/listagemRgs";

export default function telaRg(cliente: Cliente) {
    
    console.log(`Bem-vindo ao cadastro de RGs`);
    let execucao = true;

    while (execucao) {
        console.log(`Opções:`);
        
        console.log(`1 - Cadastrar RG`);
        console.log(`2 - Listar todos os RGs`);
        console.log(`3 - Remover RG`);
        console.log(`4 - Atualizar RG`);
        console.log(`5 - Consultar RG`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        let cadastro = new CadastroRg(cliente.getRgs);
        let listagem = new ListagemRgs(cliente.getRgs);

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