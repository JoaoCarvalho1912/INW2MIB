/* ------------------------- EXEMPLO 1 ---------------------- 

let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: "2018",
    preco: 45000,
    motor:{
        cilindradas: 1.4,
        potencia: 100
    }

    /* MÉTODOS: esses trabalham com function  dentro do vetor/exemplo poo. Nessa funcao, tem o console.log 
    acelerar: function(){
        console.log("Acelerando...")
    }
    frear: function(){
        console.log("Freando...")
    }
    partir: function(){
        console.log("Partindo...")
    }

}

console.log ( "A idade do carro é de ",2023 - carro.ano, "e custo de R$" + carro.preco)
*/

/* ------------------------ MAKING POO -----------------------------
let pessoa = {
    Nome: "Aurora Carvalho",
    Ano_Nascimento: "1990"
    Mostrar_idade: function(){
        (2023 - Ano_Nascimento)
    }
}

let bolsonarista = {
    Apelido: "Boi 4 da Fazenda Bolsonaro",
    ano: "2018",
    Loucura: "Avancadissima"
}

let pastelaria = {
    Nome_p: "Pastel do Créu",
    Tipo: "Comércio",
    Ano_fundacao: "1969"
}

console.log(pessoa.Nome.toUpperCase())
console.log(bolsonarista.Apelido.slice(4,))
console.log(pastelaria.Ano_fundacao.toLowerCase())
console.log("Quem vai lá, vai para ",pastelaria.Tipo.slice(0,4))
*/

let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: "2018",
    preco: 45000,
    motor:{
        cilindradas: 1.4,
        potencia: 100
    },
    acelerar: function(){
        console.log("Acelerando...")
    },
    frear: function(){
        console.log("Freando...")
    },
    partir: function(){
        console.log("Partindo...")
    }
}

carro.acelerar()

let pessoa = {
    Nome: "Aurora Carvalho",
    Ano_Nascimento: 1990,
    Mostraridade: function(){
        console.log((2023 - this.Ano_Nascimento));
    },
}
    
pessoa.Mostraridade()

/* MÉTODOS: esses trabalham com function  dentro do vetor/exemplo poo. Nessa funcao, tem o console.log */

let aviao = {
    Marca: "Abuzz",
    Modelo: "A310",
    Tipo: "Comercial",
    Fabricacao: 1998,
    Capacidade: 220,
    Vel: 0,
    Vel_max: 850,
    Altitude: 0,
    Ligado: false,

    acelerar: function(){
        if (this.Ligado && this.Vel==800) {
            this.Vel += 10 /* this.Vel = this.Vel + 10*/
        } 
        console.log("Ligado " + this.Ligado)
        console.log("Velocidade atual: " + this.Vel)
    },
    subindo : function(){
        if(this.ligado && this.velocidade == 200){
        this.altitude = this.altitude + 100
        }
        },
        descendo : function(){
            if(this.ligado && this.velocidade == 200 && this.altitude >= 0){
            this.altitude = this.altitude - 100
            }
        },
        desacelerando : function(){
            if(this.ligado && this.velocidade<=this.velocidadeMaxima){
            this.velocidade = this.velocidade - 10
            }
        },
        ligar : function(){
            this.ligado = true
            console.log("avião ligado ...")
        },
        desligar : function(){
            this.ligado = false
            console.log("avião desligado...")
        }
}

aviao.ligar();

for (let i=1; i<=aviao.Vel_max;i++) {
    aviao.acelerar()
    console.log("Ele está acelerando em "+ aviao.Vel +"km/h")
}
console.log("subindo...")

for(let i=1; i <= 30; i++){
    aviao.subindo()
    console.log("altitude atual:", aviao.Altitude, "metros")
    }

console.log("descendo...")
for(let i=1; i <= 30; i++){
    avião.descendo()
    console.log("altitude atual:", aviao.Altitude, "metros")
    }

console.log("pousado")
console.log("desacelerando...")
for(let i=1; i <= 20; i++){
    avião.desacelerando()
    console.log("velocidade atual:", aviao.Vel, "km/h")
    }
aviao.desligar()