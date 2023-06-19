
    
    const leia = require("prompt-sync")();
    const alunos = ["Maria Macho","Pedro Paulo","Paulo Pedreira","João Jacobino","Ana Pirenta"];
    let notas = [3,7,8,6,9];
    let busca = console.log("Insira o ID do Aluno:");
    leia(busca);
    for (let x = 0; x < alunos.length; x++) {
        console.log(alunos[x]);
    }

    console.log ("Tabela geral:")
    for (let i = 0; i < alunos.length; i++)
     {
        console.log(notas[i] + "\t" + alunos[i]);
    }