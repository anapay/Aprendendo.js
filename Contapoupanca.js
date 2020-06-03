


export class ContaPoupanca {
    constructor(cliente, agencia, saldo) {

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo= saldo;
    
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }

    }

    depositar(valor) {
        if (valor <= 0) {8
            return;
        }
        this._saldo += valor;

    }
    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}


