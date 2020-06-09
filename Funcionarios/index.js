import { Cliente } from "../ACliente.js";
import { Gerente } from "./Gerente.js";
import { Diretor } from "./Diretor.js";
import { SistemaAutenticacao } from "../SistemaAutenticacao.js"

const diretor = new Diretor ("Natalia", 10000, 12345678900);
diretor.cadastrarSenha("123450");
const gerente = new Gerente ("Tania", 5000, 123456789111);
gerente.cadastrarSenha("12345")

const cliente = new Cliente("Ana", 123456789112, "1221")
 
const diretorLogado = SistemaAutenticacao.login(diretor,"123450");
const gerenteLogado = SistemaAutenticacao.login(gerente, "12345");
const clienteLogado = SistemaAutenticacao.login(cliente, "1221")

console.log(diretorLogado, gerenteLogado, clienteLogado);
