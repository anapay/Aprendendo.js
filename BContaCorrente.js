import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    constructor(cliente, agencia, _saldo) {
        super(cliente, agencia , 0);
        ContaCorrente.numeroContas += 1;

    }
}