import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import telaRg from "../app/telaRg";
import ListagemRgs from "./listagemRgs";
import telaTelefone from "../app/telaTelefone";
import ListagemTelefones from "./listagemTelefones";
import telaProduto from "../app/telaProduto";
import ListagemProdutos from "./listagemProdutos";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    // CRUD (Create, Read, Update e Delete)
    // Create:
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído!\n`);
    }

    // Read:
    public consultar(): void {
        console.log(`\nConsulta de cliente`);
        let cpfValor = this.entrada.receberTexto(`Por favor informe o número do CPF do cliente a ser consultado: `);
        let cpf = new CPF(cpfValor, new Date());

        // Encontra o cliente com o CPF fornecido
        let cliente = this.clientes.find(cliente => cliente.getCpf.equals(cpf));

        if (cliente) {
            console.log(`\nInformações do cliente:`);
            console.log(`Nome: ${cliente.getNome}`);
            console.log(`Nome Social: ${cliente.getNomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`Data de Emissão do CPF: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`);
            
            let rgs = new ListagemRgs(cliente.getRgs);
            rgs.listar();

            let telefones = new ListagemTelefones(cliente.getTelefones);
            telefones.listar();

            let produtos = new ListagemProdutos(cliente.getProdutosConsumidos);
            produtos.listar();
            
            console.log(`\nConsulta concluída.\n`);
        } else {
            console.log(`\nCliente com o CPF informado não encontrado.\n`);
        }
    }

    // Update:
    public atualizar(): void {
        console.log(`\nInício da atualização do cliente`);
        let cpfValor = this.entrada.receberTexto(`Por favor informe o número do CPF do cliente a ser atualizado: `);
        let cpf = new CPF(cpfValor, new Date());

        let index = this.clientes.findIndex(cliente => cliente.getCpf.equals(cpf));

        if (index === -1) {
            console.log(`\nCliente com o CPF informado não encontrado.\n`);
            return;
        }

        let cliente = this.clientes[index];
        let novoNome = this.entrada.receberTexto(`Novo nome do cliente (deixe em branco para manter ${cliente.getNome}): `);
        let novoNomeSocial = this.entrada.receberTexto(`Novo nome social do cliente (deixe em branco para manter ${cliente.getNomeSocial}): `);

        if (novoNome) cliente.setNome = novoNome;
        if (novoNomeSocial) cliente.setNomeSocial = novoNomeSocial;

        let resposta = this.entrada.receberTexto(`Atualizar informações de RG? (sim | não): `);
        resposta.toLowerCase();
        if (resposta === "sim" || resposta === "yes") {
            telaRg(cliente);
        }

        resposta = this.entrada.receberTexto(`Atualizar informações de telefone? (sim | não): `);
        resposta.toLowerCase();
        if (resposta === "sim" || resposta === "yes") {
            telaTelefone(cliente);
        }

        resposta = this.entrada.receberTexto(`Atualizar informações de produto? (sim | não): `);
        resposta.toLowerCase();
        if (resposta === "sim" || resposta === "yes") {
            telaProduto(cliente);
        }

        console.log(`\nAtualização concluída :)\n`);
    }

    // Delete:
    public remover(): void {
        console.log(`\nInício da remoção do cliente`);
        let cpfValor = this.entrada.receberTexto(`Por favor informe o número do CPF do cliente a ser removido: `);
        let cpf = new CPF(cpfValor, new Date());
        
        let index = this.clientes.findIndex(cliente => cliente.getCpf.equals(cpf));
        
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`\nCliente removido com sucesso :)\n`);
        } else {
            console.log(`\nCliente com o CPF informado não encontrado.\n`);
        }
    }

}