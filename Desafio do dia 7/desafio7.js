const sair = document.querySelector(".sair");
const calculadora = document.querySelector(".calculadora");
const operacoes = document.querySelectorAll('[data-operacao]');
const simbolo = document.querySelector('.simbolo');
const inserir = document.querySelector(".inserir");
const total = document.querySelector(".total");
var monitor = document.getElementById("direita-tela");
let valorOperacao = '';
let valoresInformados = [];




operacaoSoma();
operacaoSubtracao();
operacaoMultiplicacao();
operacaoDivisao();
//numerosCalculadora();
botaoCalcular();
botaoInserir();

//Function que ativa e desativa a classe .selecionado nos botões de operação;
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


//function que determina o valor do calculo para SOMA;
function operacaoSoma() {
    operacoes[0].addEventListener("click", () => {
        calculadora.classList.remove("hide");

        valorOperacao = "+";
        simbolo.innerHTML = "<p>" + valorOperacao + "</p>";
    })
}

//function que determina o valor do calculo para SUBTRAÇÂO;
function operacaoSubtracao() {
    operacoes[1].addEventListener("click", () => {
        calculadora.classList.remove("hide");


        valorOperacao = "-";
        simbolo.innerHTML = "<p>" + valorOperacao + "</p>";

    })
}

//function que determina o valor do calculo para MULTIPLICAÇÃO;
function operacaoMultiplicacao() {
    operacoes[2].addEventListener("click", () => {
        calculadora.classList.remove("hide");


        valorOperacao = "*";
        simbolo.innerHTML = "<p>" + valorOperacao + "</p>";
    })
}

//function que determina o valor do calculo para DIVISÃO;
function operacaoDivisao() {
    operacoes[3].addEventListener("click", () => {
        calculadora.classList.remove("hide");


        valorOperacao = "/";
        simbolo.innerHTML = "<p>" + valorOperacao + "</p>";
    })
}

//Function que grava os valores do input na tela:

function botaoInserir() {

    inserir.addEventListener("click", () => {
        var valorInput = document.querySelector(".conteudo-resposta").value;

        if (valorInput != '') {

            monitor.innerHTML += `<li>${valorInput}</li>`;//O valor é exibido na tela

            valoresInformados.push(valorInput);
            
            console.log(valoresInformados);
        }
    })
}

//teclado ainda em desenvolvimento;
function numerosCalculadora() {
    const numeros = document.querySelectorAll(".conteudo-numero");
    for (n = 0; n < numeros.length; n++)

        numeros[n].addEventListener("click", () => {
            valorInput
        })
}

function botaoCalcular() {
    const calcular = document.querySelector(".calcular");


    calcular.addEventListener('click', () => {
        if (valorOperacao == "+") {
            calcula(Operacoes.ADICAO)
        }
        else if (valorOperacao == "-") {
            calcula(Operacoes.SUBTRACAO);
        }
        else if (valorOperacao == "*") {
            calcula(Operacoes.MULTIPLICACAO);
        }
        else if (valorOperacao == "/") {
            calcula(Operacoes.DIVISAO);
        }
    })
}

function calcula(operacao) {
    let soma = +valoresInformados[0];
    for (let i = 1; i < valoresInformados.length; i++) {
        if (operacao == Operacoes.ADICAO) {
            soma += +valoresInformados[i];
        }
        else if (operacao == Operacoes.SUBTRACAO) {
            soma -= +valoresInformados[i];
        }
        else if (operacao == Operacoes.MULTIPLICACAO) {
            soma *= +valoresInformados[i];
        }
        else if (operacao == Operacoes.DIVISAO) {
            soma /= +valoresInformados[i];
        }

        total.innerHTML = `Total: ${soma}`;

        console.log(soma)
    }
    return soma
}

//enum Operacoes{ADICAO, SUBTRACAO, MULTIPLICACAO, DIVISAO};

const Operacoes = {
    ADICAO: 0,
    SUBTRACAO: 1,
    MULTIPLICACAO: 2,
    DIVISAO: 3,
}