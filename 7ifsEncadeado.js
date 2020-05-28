//ifs encadeados 


    const filmesMaiores = new Array (
        
        "Árvore de Sangue (2018), Julio Medem", 
        "Histórias Que Nosso Cinema (Não) Contava (2017), Fernanda Pessoa"
    ) ;

    filmesMaiores.push(`A casa de cera `, `O massacre da serra eletrica `, `Todo mundo em Pânico` );
   
    const idade = 17;
    const acompanhado = false;
    if (idade >= 18) 
    {
        console.log("Seja bem vindo! Divirta-se!")
        console.log("Veja os filmes em destaque!")
        console.log(filmesMaiores)
    }
    else 
    {
        if(acompanhado)
        {
            console.log("Menor acompanhado")
            console.log("Seja bem vindo! Divirta-se!")
            console.log("Veja os filmes em destaque!")
            console.log(filmesMaiores)

        }
        else
        {
            console.log("Desculpa! Menores só podem entrar acompanhados, volte acompanhado de um adulto e se divirta com a nossa sessão de filmes!")
        }
      

    }







    // console.log("Veja os filmes em destaque hoje!")
    // console.log(filmesMaiores);

