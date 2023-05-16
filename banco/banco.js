
class conta{
    constructor(numero,CPF,saldo,ativo){
        this.numero=numero
        this.CPF=CPF
        this.saldo = saldo
        this.ativo = ativo
    }
    ativar(){
        this.ativo = true;}
    mostrarsaldo(){
        console.log("O saldo atual é de: ",saldo)
    }
    
    debito(valor){
        if(this.ativo=true){

            if (saldo<=0){
                console.log("Não foi possível realizar. Saldo insuficiente.")
        }
            else if(valor<=0){
                console.log("Valor nulo ou negativo")
        }
            else {this.saldo -= valor}
    }
        else{
            console.log("Não realizado, conta inativa.")
        }
    }
    credito(valor){
        if (this.ativo) {
        if(valor<=0){
            console.log("Valor nulo ou negativo")
    }
        else{this.saldo += valor}
        } 
        
        else {
            console.log("Não realizado, conta inativa.")
        }
    }
}

class especial extends conta{
    constructor(limite){

    }
}

// PROGRAMA PRINCIPAL   

const leia = require("prompt-sync")()
    let numero = parseInt(leia("Digite o número da conta: "))
    let cpf = leia("Digite o seu CPF: ")
    let op = ""
let C1 = new conta (numero,cpf,0,false)

C1.ativar()
for (let x=1; x<=10; x++) {
    op = leia("Qual operação você deseja efetuar ? Digite C para Credito e D para Debito ")
    if (op=="C") {
        valor = parseInt(leia("Digite o valor para crédito: "))
        C1.credito(valor)
    } else if (op = "D") {
        valor = parseInt(leia("Digite o valor para débito: "))
        C1.debito(valor)
    }
    console.log("Saldo final:"+C1.saldo)
}