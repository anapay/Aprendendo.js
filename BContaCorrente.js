import { Cliente } from "./ACliente.js";

export class ContaCorrente {

    static numeroContas = 0;
   
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor

        }

    }
    get cliente() {
        return this._cliente
    }
    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia, _saldo) {
        this.cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numeroContas += 1;

    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;

    }
    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
