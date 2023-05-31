const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraAcessorios(data));
 
function mostraAcessorios(acessorios){
 const htmlAcessorios =acessorios.map(
 (acessorios) =>`
 <img src=${acessorios.imagem} width=100 height=100><br>
 <h2>${acessorios.descricao}</h2>
 <h4>Valor : ${acessorios.valor}</h4>`
 );
 document.getElementById('app').innerHTML = htmlAcessorios;
}