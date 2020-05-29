// console.log("Villa Country");

// const shows = new Array(
//     "Jads & jadson",
//     "Marcos & Belutti",
//     "Henrique & Juliano",
//     "Edson & Hudson",
//     "Maiara & Maraisa"
// );

// const idadeCliente = 17;
// const acompanhada = false;
// let possuiIngresso = false; //alterando de const para let para alterar o valor dela quanto precisar;
// const ingresso = "Maiara & Maraisa";


// shows.push(Aqui adicione outros elementos que queira exibir na lista não esqueça das aspas)

// if (idadeCliente >= 18 || acompanhada == true) {
//     console.log("Seja bem vindo ao Villa Country!")
//     possuiIngresso = true
//     console.log(shows)
// } else {
//     console.log("Só pode entrar para assistir aos Shows acompanhado, volte com um adulto e divirta-se!")
//     possuiIngresso = false
// }
// console.log("Entrada \n");
// if (possuiIngresso > 18 && possuiIngresso) {
//     console.log("Seja bem vindo ao Villa Country!")
//     console.log(shows)

// } else {
//     console.log("Ainda temos ingresso , corra até a bilheteria")
// };

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

const podeEntrar = idadeCliente >= 18 || acompanhada == true;

let contador = 0; //esse contador vai indicar pra o programa qual momento da lista ele quer verificar
while (contador <= 4) { //enquanto o contador for menor que o tamnho da minha lista execute a codigo seguinte
    if (shows[contador] == ingresso) {
        ;//shows é o nome da lista e contador é o lugar que estou verificando pegando item a item e verificando se é igual ao ingresso da pessoa
        console.log("Tem o show que vc quer pode entrar!")

    } else {
        console.log("Não temos  o show que vc quer hoje, temos outros disponíveis gostaria de assistir? Ou prefere aguardar a nossa agenda de shows?")
    }

    contador += 1; //aqui estou dizendo ao contador pega o valor que tá dentro de vc e me deovlva ];

};

