import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente, _saldo) {
        super(cliente, 400)
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);


    }

}