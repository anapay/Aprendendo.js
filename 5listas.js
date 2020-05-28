
// console.log(`Trabalhando com listas`); 



const listaDeLivros = new Array(

    `Criatividade, Osho`,
    `Roube como um Artista, Austin Kleon`,                     //construtor de lista;
    `Como fazer amigos e influenciar pessoas, Dale Carnegie`,
    `Propósito, Sri Prem Baba`,
    `Girlboss, Sophia Amoruso`,
    `O Ano em que disse sim, Shonda Rhimes`
);

listaDeLivros.push(`Trabalhe quatro horas por semana Tim Ferris`, `The Secret, Rhonda Byrne`, ` + Esperto que o Diabo, Napoleon  Hill`); //push adiciona iten na lista depois de ser declarada pelo array;

console.log("Livros que vão mudar sua vida!");
console.log(listaDeLivros);

listaDeLivros.splice(2,1); //removendo item da lista na posição 2, 1 elemento;
console.log(listaDeLivros); //exibindo lista com alteração;

console.log(listaDeLivros[0], listaDeLivros[4]); //especificando item pra ser exibido na lista;

