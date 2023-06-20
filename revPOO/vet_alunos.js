
    /*                          PROGRAMA 1 o PROGRAMA 1 
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
    */;

        // Programa 2 - Criar um sistema para inserir notas 

    const leia = require("prompt-sync")();
    const alunos = ["Maria","Pedro","Paulo","","Ana Carla"];
    
    class Pessoa {
        constructor(Nome, CPF, AnoNasc, Ocupacao){
            Nome = this.Nome;
            CPF = this.CPF;
            AnoNasc = this.AnoNasc;
            Ocupacao = this.Ocupacao; 
        }
        mostraIdade(){
            console.log = ("Idade: " + (2023-this.AnoNasc))
        }
    }

    let P1 = new Pessoa("João", "223.334.445-01", 2005, "Estudante");
    let P2 = new Pessoa("Maria", "333.444.555-09", 2004, "Estudante");
    let P3 = new Pessoa("Pedro", "565.971-01", 2006, "Estudante");
    let P4 = new Pessoa("Carlos", "478.999.415-05", 2005, "Estudante");

    class Estudante extends Pessoa{
        super(Nome, CPF, AnoNasc);
        constructor(Matricula, Serie, Materia, Nota){
            Matricula = this.Matricula;
            Serie = this.Serie;
            Materia = this.Materia; 
        }
    }