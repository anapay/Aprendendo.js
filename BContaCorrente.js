import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroContas = 0;
    constructor(cliente, agencia, _saldo) {
        super(cliente, agencia, 0);
        ContaCorrente.numeroContas += 1;

    }


    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }

    }

}