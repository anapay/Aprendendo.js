
export class Conta {
    constructor(cliente, agencia, saldo) {

        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta Diretamente! Essa é uma classe abstrata");

        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldo;

    }

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
//método abstrato
    sacar(valor) {
        throw new Error("Esse método é abstrato")

    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }
        return 0;

    }


    depositar(valor) {
        this._saldo += valor;

    }
    
    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

