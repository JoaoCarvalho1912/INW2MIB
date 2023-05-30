class Produto{
    constructor (id,descricao,ativo,estoque,preco,marca,tamanho){
        id = parseInt(this.id);
        descricao = this.descricao; // o padrão já é string
        ativo = this.ativo; // Boolean 
        estoque = parseInt(this.estoque);
        preco = parseInt(this.preco);
        marca = this.marca;
        tamanho = this.tamanho;
    }
    ativar(){
        this.ativo = true;
    }
    incluirestoque(valor){
        if(this.ativo=true){
            if(valor>=1){
                this.estoque += valor;
            }
        }
            else if (valor<=0) {
                console.log("Valor nulo ou negativo, tente novamente.")
            } 
            else {
                console.log("Produto desativado")
            }
            console.log("Estoque atual: ", this.estoque)
        }
    }

    retirarestoque(valor);{
        if (this.ativo=true) {
            if(valor<=this.estoque){
                this.estoque -= valor;
            }
            else if (valor>this.estoque) {
                console.log ("Maior do que o estoque atual")
            } 
            else{
                console.log ("Valor nulo ou negativo.")
            }
            console.log("Estoque atual: ", this.estoque)
        }
    }

    const leia = require("prompt-sync")()
    let nome = "SURFSHOPP";
    let slogan = "Vai surfar ? A gente vai junto."
    let produto = new Produto(id,descricao,ativo,10,preco,marca,tamanho);
// Programa 
    for(let venda; venda++; venda<=5){
            op = leia("Qual operação você deseja efetuar ? Digite S para avançar e N para Terminar ")
            if (op=="S"){
                nome;
                slogan;
                valor = parseInt(leia("Digite o valor para colocar: "))
                produto(valor)
            } else if (op=="N"){
                console.log("Fim, obrigado")
            }
            console.log("Final:",limite)
            let produto 
    }