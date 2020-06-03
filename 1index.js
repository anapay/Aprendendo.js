
console.log("SisterBank")

import { Cliente } from "./ACliente.js";
import { ContaCorrente } from "./BContaCorrente.js";
import { ContaPoupanca } from "./Contapoupanca.js";

const cliente1 = new Cliente("Ana", 12345678910); 

const cliente2 = new Cliente("Joao", 12345678911);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(102000000);
const conta2 = new ContaCorrente(cliente2, 1001);

const contaPoupanca = new ContaPoupanca(cliente1, 1001, 35000000);



console.log(conta1);
console.log(contaPoupanca);


