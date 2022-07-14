const operacoes = document.querySelectorAll(".operacao");
const sair = document.querySelector(".sair");
const numeros = document.querySelectorAll("numero");
const calculadora = document.querySelector(".calculadora");
const inserir = document.querySelector(".inserir");
const calcular = document.querySelector(".calcular");
const valorInput = document.querySelector(".conteudo-resposta").value;
const monitor = document.getElementById("monitor");

let valorOperacao = "";



function draw (){
    //operacaoSoma();
    //operacaoSubtracao();
    //operacaoMultiplicacao();
    //operacaoDivisao();
    //criaCalculo();
    //numerosCalculadora();
}

function operacaoSoma (){
    operacoes[0].addEventListener("click", () => {
        operacoes[0].classList.add("selecionado");
        calculadora.classList.remove("hide");

   
    valorOperacao = "+";
    })
}

function operacaoSubtracao (){
    operacoes[1].addEventListener("click", () => {
        operacoes[1].classList.add("selecionado");
        calculadora.classList.remove("hide");

        
        valorOperacao = "-";
    })
}

function operacaoMultiplicacao (){
    operacoes[2].addEventListener("click", () => {
        operacoes[2].classList.add("selecionado");
        calculadora.classList.remove("hide");

   
    valorOperacao = "*";
    })
}

function operacaoDivisao (){
    operacoes[3].addEventListener("click", () => {
        operacoes[3].classList.add("selecionado");
        calculadora.classList.remove("hide");

        
        valorOperacao = "/";
    })
}

inserir.addEventListener("click", () => {
    monitor.innerHTML = monitor +"<li>"+valorInput+"</li>";
    
    document.getElementById("monitor").innerHTML = monitor;
})




function numerosCalculadora (){
    for (n = 0; n < numeros.length; n++)
    
    numeros[n].addEventListener("click", () => {
        ;
    })
}