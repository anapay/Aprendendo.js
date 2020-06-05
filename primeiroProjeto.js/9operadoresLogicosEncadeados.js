
const filmesMaiores = new Array(

    "Árvore de Sangue (2018), Julio Medem",
    "Histórias Que Nosso Cinema (Não) Contava (2017), Fernanda Pessoa"
);

filmesMaiores.push(`A casa de cera `, `O massacre da serra eletrica `, `Todo mundo em Pânico`);

const idade = 17;
const acompanhado = true;
const temIngresso = false;

if (idade >= 18 || acompanhado == true) //verifique se  o cliente é >= 18 ou esta acompanhado e execute o comando seguinte!; nesse caso pipe que são as barras invertidas funcionam como ou e vai fazer a comparação emtre ser maior ou está acompanhado;
{
    console.log("Veja os filmes em destaque! Divirta-se!")//esse comando so vai ser executado se uma das duas opções forem verdadeiras;
    console.log(filmesMaiores)
}
else //se não for maior e nem estiver acompanhado execute esse;
{
    console.log("Desculpa! Menores só podem entrar acompanhados, volte acompanhado de um adulto e se divirta com a nossa sessão de filmes!")
};

console.log("Sessão! \n\n") //para entrar na sessao verifique

if (idade >= 18 && temIngresso) { //se for >18 && se tem ingresso, observe que essa condição só vai ser executada se as duas opções forem verdadeiras;
    console.log("Tenha uma ótima sessão!");//se true execute;
} else {
    console.log("Compre um ingresso e retorne ainda da tempo, use o App")//caso contrario execute esse;
};


