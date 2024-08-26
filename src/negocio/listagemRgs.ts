import RG from "../modelo/rg";
import Listagem from "./listagem";

export default class ListagemRgs extends Listagem {
    private rgs: Array<RG>;
    constructor(rgs: Array<RG>) {
        super()
        this.rgs = rgs;
    }
    public listar(): void {
        console.log(`\nLista de todos os RGs:`);
        if(this.rgs.length > 0) {
            for (let i = 0; i < this.rgs.length; i++) {
                console.log(`[${i+1}] ${this.rgs[i]}`);
            }
        } else {
            console.log(`\nNenhum RG cadastrado.\n`);
        }
    }
}