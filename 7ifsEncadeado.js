//ifs encadeados 


const filmesMaiores = new Array(

    "Árvore de Sangue (2018), Julio Medem",
    "Histórias Que Nosso Cinema (Não) Contava (2017), Fernanda Pessoa"
);

filmesMaiores.push(`A casa de cera `, `O massacre da serra eletrica `, `Todo mundo em Pânico`);

const idade = 17;
const acompanhado = false;
if (idade >= 18) //se cliente for maior que >=18 execute o comando seguinte!;
{
    console.log("Seja bem vindo! Divirta-se!")
    console.log("Veja os filmes em destaque!")
    console.log(filmesMaiores)
}
else if (acompanhado) //se não for maior faz a verificaçaõ do if se está acompanahdo
{
    console.log("Menor acompanhado")
    console.log("Seja bem vindo! Divirta-se!")
    console.log("Veja os filmes em destaque!")
    console.log(filmesMaiores)

}
else //se não for maior e nem estiver acompanhado execute esse;
{
    console.log("Desculpa! Menores só podem entrar acompanhados, volte acompanhado de um adulto e se divirta com a nossa sessão de filmes!")
};
//ter cuidado com as condicionais em um unico codigo podem gerar problemas de logica









