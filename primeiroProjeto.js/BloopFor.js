console.log("Bem vindo ao Wood’s")

const DuplasSertanejas = new Array(
    "Jorge & Mateus",
    "Joao Neto & Frederico",
    "Henrique & Juliano",
    "Lucas Reis e Tacio"
)
const idade = 18;
const acompahada = false;
let temIngresso = false;
let TemShow = "Jorge & Mateus";

const podeEntrar = idade >= 18 || acompahada == true;
let i = 0;
while (i <= 3) {
    if (DuplasSertanejas[i] == TemShow) {
        TemShow = true
        console.log("Tem o Show que vc quer assitir; corra e compre seu ingresso!")
        break
    }

}

console.log("Arena De Shows")

if (podeEntrar && TemShow) {
    console.log("Otimo Show!")
} else {
        console.log("Tem o Show que vc quer assitir; !")
        console.log("Volte com um adulto e assita aos Shows")
};
for (let i = 0; i <=3; cont = i++) {
    if (DuplasSertanejas[i] == TemShow) {
        TemShow = true

    }


};
//substituimos o nome contador por i
    //na primeira caxinha teremos o inicializador do contador o segundo espaço de pois da virgula serve para a condição do loop e o terceiro é o incremento do contador para que não entre em loop infinito. o ++ quer dizer some