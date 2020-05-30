
console.log("Villa Country");

const shows = new Array(
    "Jads & jadson",
    "Marcos & Belutti",
    "Henrique & Juliano",
    "Edson & Hudson",
    "Maiara & Maraisa"
);
console.log (shows)


const idadeCliente = 17;
const acompanhada = false;
let possuiIngresso = false;
let ingresso = "Maiara & Maraisa";


const podeEntrar = idadeCliente >=18 || acompanhada == true;

let contador = 0;

while(contador <=4){
    if(shows[contador] == podeEntrar){
      ingresso = true;
        break

    } else {
        console.log("Só pode entrar para assistir aos Shows acompanhado, volte com um adulto e divirta-se!")
        possuiIngresso = false
    contador +=1;
}
console.log("Tem o Show que vc quer assistir!");




}