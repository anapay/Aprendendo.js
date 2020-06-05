//Trabalhando com listas usando operadores lógicos


const listaDeLivrosHot = new Array( //costruindo lista
    `Atraida por um Mafioso,`,
    `Os filhos da Máfia,`,
    `Segredos Ocultos`
);

listaDeLivrosHot.push(`Insensatez`, `Casando com o Inimigo`);//adicionando item a lista fora do costrutor
// console.log("Livros hot");
// console.log(listaDeLivrosHot);


// listaDeLivros.splice(2,1); //removendo item da lista na hora da exibição
// console.log(listaDeLivros);//exibindo lista com item excluido

// console.log(listaDeLivros[0],listaDeLivros[1]); //exibindo item da sessão pode ser exibido dois livros por ex 
// console.log(listaDeLivros);

const clienteMenor = new Array(
    `Criatividade, Osho`,
    `Roube como um Artista, Austin Kleon`,                     //construtor de lista;
    `Como fazer amigos e influenciar pessoas, Dale Carnegie`,
    `Propósito, Sri Prem Baba`,
    `Girlboss, Sophia Amoruso`,
    `O Ano em que disse sim, Shonda Rhimes`
);

clienteMenor.push(`Trabalhe quatro horas por semana Tim Ferris`, `The Secret, Rhonda Byrne`, ` + Esperto que o Diabo, Napoleon  Hill`); //push adiciona iten na lista depois de ser declarada pelo array;

const idadeCliente = 17;
// console.log("Se Surprenda com a nossa lista de livros Hot");
// console.log(listaDeLivrosHot);

if (idadeCliente >= 18) {
    console.log("Cliente maior de idade");
    console.log(listaDeLivrosHot);
}
else {
    console.log("Eses livros vão mudar sua vida Jovem!")
    console.log(clienteMenor);

};


