import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    // CRUD (Create, Read, Update e Delete)
    // Create:
    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preco do serviço: `);
        let id = this.servicos.length + 1;
        let produto = new Servico(id, nome, preco);
        this.servicos.push(produto);
        console.log(`\nCadastro concluído!\n`);
    }

    // Read:
    public consultar(): void {
        console.log(`\nConsulta de serviço`);   
        let index = this.entrada.receberNumero(`Por favor informe o índice do serviço: `);

        if(index < 1 || index > this.servicos.length) {
            console.log(`\nServiço não encontrado.\n`);
        } else {
            let servico = this.servicos[index-1];
            console.log(`\nInformações do serviço:`);
            console.log(`ID: ${servico.getId}`);
            console.log(`Serviço: ${servico.getNome}`);
            console.log(`Preço: R$ ${servico.getPreco.toFixed(2)}`);
            console.log(`\nConsulta concluída.\n`);
        }
    }

    // Update:
    public atualizar(): void {
        console.log(`\nInício da atualização do serviço`);
        let index = this.entrada.receberNumero(`Por favor informe o índice do serviço: `);

        if(index < 1 || index > this.servicos.length) {
            console.log(`\nServiço não encontrado.\n`);
            return;
        }

        let servico = this.servicos[index-1];
        let novoNome = this.entrada.receberTexto(`Novo Nome (deixe em branco para manter ${servico.getNome}): `);
        let novoPreco = this.entrada.receberNumero(`Novo Preço (deixe em branco para manter R$ ${servico.getPreco.toFixed(2)}): `);

        if (novoNome) servico.setNome = novoNome;
        if (novoPreco) servico.setPreco = novoPreco;

        console.log(`\nAtualização concluída!\n`);
    }

    // Delete:
    public remover(): void {
        console.log(`\nInício da remoção do serviço`);
        let index = this.entrada.receberNumero(`Por favor informe o índice do serviço: `);

        if(index < 1 || index > this.servicos.length) {
            console.log(`\nServiço não encontrado.\n`);
        } else {
            this.servicos.splice(index-1, 1);
            console.log(`\nServiço removido com sucesso!\n`);
        }
    }

}