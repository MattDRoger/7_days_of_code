const sair = document.querySelector(".sair");
const calculadora = document.querySelector(".calculadora");
const operacoes = document.querySelectorAll('[data-operacao]');
const simbolo = document.querySelector('.simbolo');

var monitor = document.getElementById("direita-tela");
let valorOperacao = "";

let valoresInformados = [];


function draw(){
    operacaoSoma();
    operacaoSubtracao();
    operacaoMultiplicacao();
    operacaoDivisao();
    //numerosCalculadora();
    botaoCalcular();
    botaoInserir ();
}

//Function que ativa e desativa a classe .selecionado nos botões de operação;
(() => {
    const operacoes = document.querySelectorAll('[data-operacao]');

    desativarSelecionados = () => {
        operacoes.forEach(operacao => operacao.classList.remove('selecionado'))
    }
    
    ativarSelecionado = (valor) => {
        const simboloOperacao = document.querySelector(`[data-operacao='${valor}']`);

        simboloOperacao.classList.add('selecionado');

    }
    
    operacoes.forEach(operacao => operacao.addEventListener('click', () => {
        const valor = operacao.dataset.operacao
        
        desativarSelecionados();
        ativarSelecionado(valor);
    }))
})()

//function que determina o valor do calculo para SOMA;
function operacaoSoma (){
    operacoes[0].addEventListener("click", () => {
        calculadora.classList.remove("hide");
        
        valorOperacao = "+";
        simbolo.innerHTML = "<p>"+valorOperacao+"</p>";
    })
}

//function que determina o valor do calculo para SUBTRAÇÂO;
function operacaoSubtracao (){
    operacoes[1].addEventListener("click", () => {
        calculadora.classList.remove("hide");

        
        valorOperacao = "-";
        simbolo.innerHTML = "<p>"+valorOperacao+"</p>";
        
    })
}

//function que determina o valor do calculo para MULTIPLICAÇÃO;
function operacaoMultiplicacao (){
    operacoes[2].addEventListener("click", () => {
        calculadora.classList.remove("hide");

   
    valorOperacao = "*";
    simbolo.innerHTML = "<p>"+valorOperacao+"</p>";
    })
}

//function que determina o valor do calculo para DIVISÃO;
function operacaoDivisao (){
    operacoes[3].addEventListener("click", () => {
        calculadora.classList.remove("hide");

        
        valorOperacao = "/";
        simbolo.innerHTML = "<p>"+valorOperacao+"</p>";
    })
}

//Function que grava os valores do input na tela:
const inserir = document.querySelector(".inserir");
function botaoInserir (){

    inserir.addEventListener("click", () => {
        var valorInput = document.querySelector(".conteudo-resposta").value;
        
        
        if (valorInput != ''){
            monitor.innerHTML += `<li>${valorInput}</li>`;
            
            valoresInformados.push(valorInput);

            console.log(valoresInformados)
        }
    })
}
    
//teclado ainda em desenvolvimento;
function numerosCalculadora (){
    const numeros = document.querySelectorAll(".conteudo-numero");
    for (n = 0; n < numeros.length; n++)
    
    numeros[n].addEventListener("click", () => {
    valorInput
    })
}

function botaoCalcular(){
    const calcular = document.querySelector(".calcular");
    const total = document.querySelector(".total");

    calcular.addEventListener('click', () => {
        if (valorOperacao == "+"){
        }
        let soma = 0
        for (let i in valoresInformados) {
            soma += valoresInformados[i]
            
            total.innerHTML = `Total: ${soma}`;
        }

    })
}

;