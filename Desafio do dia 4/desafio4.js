//Código de funcionamento do jogo de advinhação;

//Fórmula para gerar o número aleatório
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//constante do botão HTML
const vamos = document.querySelector('.letsgo');

//variável de chances do jogador
let chances = 2

//Função responsável por controlar as mensagens que o jogador receberá enquanto joga;
vamos.addEventListener("click", () => {
    let desafio = prompt('Olá, tente acertar o número de 0 a 10 que estou pensando!');
    let resposta = numeroRandom(0, 10);

    if (desafio == resposta){
        alert('!!!! Parabéns, Acertou miseravi, o número que eu estava pensando era  ' + resposta + ' !!!!');
        window.location.reload();
    }

    if (desafio != resposta && chances == 2){
        alert('Errou feio, errou rude!! Mas calma, você ainda tem mais duas chances!!');
     }

    if (desafio != resposta && chances == 1){
        alert('Última chance Mutchatcho, boa sorte!');
    }

    if (desafio != resposta && chances == 0){
        alert('!! Game Over cowboy, acabou, você perdeu, o número que eu estava pensando era  ' + resposta + ' !!');
        
        window.location.reload();
    }

    if (desafio < 0 || desafio > 10){
        alert('Você chutou pra fora, tente um número entre 0 e 10');
    }

    chances -= 1
})



