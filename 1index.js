
console.log("SisterBank")

import { Cliente } from "./ACliente.js";
import { ContaCorrente } from "./BContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ana", 12345678910); 

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(102000000);

const contaPoupanca = new ContaPoupanca(cliente1, 1001, 35000000);



console.log(cliente1);
console.log(contaPoupanca,conta1);


