const leia = require("prompt-sync")();

//vetor e array
var equipes = ["SFC-AP","SPFC-AP","SCCP-AL","SEP-RN"]
console.log(equipes);
var pontos = 0;

for (let i = 0; i<equipes.length; i++) {
    console.log(equipes[i]);   // i será a posição de cada time           
    pontos[i]=parseInt(leia("Digite os pontos: "));
    console.log("Tabela: ", equipes[i] + "/t" + pontos[i]);
}