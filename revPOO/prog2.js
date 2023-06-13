/*                                      Errado, consultar CORRECAO
    Usuario digita num
    1 - mostrar num
    2 - maior numero digitado
    3 - qtd de numeros registrados
    4 - funciona até ele digitar num<0
    5 - O total desconsidera o num negativo */

    const leia = require("prompt-sync");
    let numero = parseFloat(leia(console.log("Insira um número qualquer")));
    let total = 0;
    let maior = 0;
    let qtd = 0;
    do {
        qtd++;
        console.log(numero);
    }
    while(numero<0)
        total = numero+=numero
        console.log(total);
        maior = numero>numero;
        console.log(maior);