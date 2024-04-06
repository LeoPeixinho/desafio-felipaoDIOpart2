function calculationScore(victory, defeat){
    let operation = victory - defeat
    return operation
}

    let rankedScore = calculationScore(80, 5)

        let i = rankedScore
        for(i; i<100; i++){
        console.log("O Herói está disputando partidas restantes da Temporada atual, aguardando resultados")    
        }
            if (i <=10){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Ferro")    
            } else if (i <= 20){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Bronze")
            } else if (i <= 50){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Prata")   
            } else if (i <= 80){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Ouro")
            } else if (i <=90){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Diamante")
            } else if (i <=100){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Lendário")   
            } else if (i >=101){
            console.log("O Herói tem o saldo de " + i + " vitórias e está no nível de Imortal")    
            }