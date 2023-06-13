            // Objetivo: Multiplicar, se o número for entre 5 e 9, por 3 até chegar em um número > 100

            const leia = require("prompt-sync")();
            numero = parseFloat(leia("Insira um número entre 5 a 9: "));
                do{ 
                    numero = numero*3;
                    console.log(numero);
                }
                while(numero>100){
                    console.log("Resultado Final: ",numero);
                };