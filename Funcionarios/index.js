import { Cliente } from "../ACliente.js";
import { Gerente } from "./Gerente.js";
import { Diretor } from "./Diretor.js";
import { SistemaAutenticacao } from "../SistemaAutenticacao.js"

const diretor = new Diretor ("Natalia", 10000, 12345678900);
const gerente = new Gerente ("Tania", 5000, 123456789111);
 
const logado = SistemaAutenticacao.login(diretor,"123450");

console.log(diretor);
