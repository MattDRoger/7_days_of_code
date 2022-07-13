let operacoes = document.querySelectorAll(".operacao");
let sair = document.querySelector(".sair");
let numeros = document.querySelectorAll("numero");
const calculadora = document.querySelector(".calculadora");
let valorOperacao = "";

function draw (){
    operacaoSoma();
    telaDigital();
}


function telaDigital (){
    const 
    
}

function operacaoSoma (){
    operacoes[0].addEventListener("click", () => {
        operacoes[0].classList.add("selecionado");
        calculadora.classList.remove("hide");

   
    valorOperacao = "+";


    })
}

