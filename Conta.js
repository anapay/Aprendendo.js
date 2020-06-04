
export class Conta {
    constructor(cliente, agencia, saldo) {
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

    sacar(valor) {

        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }

    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;

    }
    trasferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
