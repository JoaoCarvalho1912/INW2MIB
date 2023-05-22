
class conta{
    constructor(numero,CPF,saldo,ativo){
        this.numero=numero
        this.CPF=CPF
        this.saldo=saldo
        this.ativo=ativo
    }
    ativar(){
        this.ativo = true;}
    mostrarsaldo(){
        console.log("O saldo atual é de: ",this.saldo)
    }
    debito(valor){
        if(this.ativo=true){

        
            if (valor>this.saldo){
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

class especial extends conta(numero,cpf,saldo,ativo){
    constructor(limite){
        super(numero,cpf,saldo,ativo)
        this.limite = limite
    }
}
C1 = new especial(1000)
// PROGRAMA PRINCIPAL   

const leia = require("prompt-sync")()
    let numero = parseInt(leia("Digite o número da conta: "))
    let cpf = leia("Digite o seu CPF: ")
    let op = ""

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
    C1.mostrarsaldo()
}
C1.debito()
for(saldo==0;valor<limite;){
    if (this.saldo<=0 && valor<=this.limite){
                this.limite -= valor
                console.log("Limite atual ",this.limite)
        }
    else if (this.saldo<=0 && valor>this.limite){
                console.log("Não foi possível realizar. Fora do limite.")
            }
}