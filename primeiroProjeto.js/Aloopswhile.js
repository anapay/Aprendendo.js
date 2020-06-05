console.log("Villa Country");

const shows = new Array(
    "Jads & jadson",
    "Marcos & Belutti",
    "Henrique & Juliano",
    "Edson & Hudson",
    "Maiara & Maraisa"
);

const idadeCliente = 17;
const acompanhada = false;
let possuiIngresso = false; //alterando de const para let para alterar o valor dela quanto precisar;
const ingresso = "Maiara & Maraisa";


// shows.push(Aqui adicione outros elementos que queira exibir na lista não esqueça das aspas)

if (idadeCliente >= 18 || acompanhada == true) {
    console.log("Seja bem vindo ao Villa Country!")
    possuiIngresso = true
    console.log(shows)
} else {
    console.log("Só pode entrar para assistir aos Shows acompanhado, volte com um adulto e divirta-se!")
    possuiIngresso = false
}
console.log("Entrada \n");
if (possuiIngresso > 18 && possuiIngresso) {
    console.log("Seja bem vindo ao Villa Country!")
    console.log(shows)

} else {
    console.log("Ainda temos ingresso , corra até a bilheteria")
};
