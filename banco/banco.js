                                            // IGNORE !! 
class conta{
    constructor(numero,CPF,saldo,ativo){
        this.numero=numero
        this.CPF=CPF
        this.saldo=saldo
        this.ativo=ativo
    }
    ativar(){
        this.ativo = true;
    }
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


                                        // CLASSE ESPECIAL 
class especial extends conta{
    constructor(numero,cpf,saldo,ativo,limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite;
    }
    usarLimite(valor){
        if (this.saldo<=0 && valor<=this.limite){
            console.log("Limite atual ",(this.limite -= valor) )
            }
        else if (valor>this.saldo && valor<=this.limite){
                    let resto = (this.saldo -= valor);
                    this.saldo = 0;
                    this.limite -= -(resto);
                console.log("Limite restante: ", this.limite)
        }
        else if(valor = 0){
            console.log("Valor nulo")
        }
}
mostrarLimite(){
    console.log('Limite disponível:', this.limite)
}
}

// PROGRAMA PRINCIPAL   

const leia = require("prompt-sync")()
    let numero = parseInt(leia("Digite o número da conta: "))
    let cpf = leia("Digite o seu CPF: ")
    let op = ""
    let C1e = new especial(numero,cpf,0,true,1000)
C1e.ativar()
for (let x=1; x<=10; x++) {
    op = leia("Qual operação você deseja efetuar ? Digite C para Credito e D para Debito ")
    if (op=="C") {
        valor = parseInt(leia("Digite o valor para crédito: "))
        C1e.credito(valor)
    } else if (op=="D") {
        valor = parseInt(leia("Digite o valor para débito: "))
        C1e.debito(valor)
    }
    C1e.usarLimite(valor)
    C1e.mostrarsaldo()
    C1e.mostrarLimite()
}