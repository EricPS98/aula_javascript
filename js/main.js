/* ---------------------------------------------------------------- Aula 1

var nome = "Eric Palmeira";
var n1 = 22;
var n2 = 10;
var frase ="Japão e a melhor seleção do mundo";

// alert(nome + " tem " + idade + " anos");
//alert(n1 + n2);


console.log(nome);
console.log(n1 + n2);

// Deixa todos os caracteres em minúsculo
console.log(frase.toLowerCase());

// Troca a palavra "Japão" para "Brasil"
alert(frase.replace("Japão", "Brasil"));
*/

/* ---------------------------------------------------------------- Aula 2

var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();

alert(lista[1]);

//Exibe todos os elementos da lista
console.log(lista);

//Exibe os elementos da lista de forma reversa 
console.log(lista.reverse());

//Exibe tamanho da lista
console.log(lista.length);

//Exibe todos os elementos da lista convertidos em String
console.log(lista.toString());

//Exibe todos os elementos da lista separados por um traço e convertidos em String
console.log(lista.join(" - "));


var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
//Exibe nome do objeto da primeira posição do vetor "frutas"
console.log(frutas[0].nome);
*/

/* ---------------------------------------------------------------- Aula 3
*/

/*
var idade = prompt("Qual a sua idade?")

if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade")
}

var count = 0;
while (count <= 5 ){
    console.log(count);
    count++;
}

for (var count = 0; count <= 5; count++){
    console.log(count);
}

var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getFullYear());
*/

/* ---------------------------------------------------------------- Aula 4
var validar;

var idade = prompt("Qual sua idade?");

function validaIdade(idade){

    if (idade >= 18){
       validar = "Maior de idade";
    }else{
        validar = "Menor de idade";
    }
    return validar;
}

alert(validaIdade(idade));
*/

function botao() {
    document.getElementById("clicou").innerHTML = "<b> Obrigado por clicar</b>";
    //console.log(document.getElementById("clicou"));
}
function redirecionar(){
    //Abre o link em outra guia
    window.open("https://www.google.com.br/");

    //Abre o link na mesma pagina
    window.location.href="https://youtube.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "<b> Obrigado por passar o mouse</b>";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}