import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroContas = 0;
    constructor(cliente, agencia, _saldo) {
        super(cliente, agencia, 0);
        ContaCorrente.numeroContas += 1;

    }

// esse método sacar está sobrescrevendo o comportamento de sacar da classe mãe
    sacar(valor) {
        let taxa = 1.1;
            return this._sacar(valor, taxa);
    }

}