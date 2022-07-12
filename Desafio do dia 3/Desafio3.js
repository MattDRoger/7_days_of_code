//Const dos botões da pag.
const button = document.querySelectorAll('.conteudo-botao');
const pagina = document.querySelectorAll('[data-conteudo]');
const button_voltar = document.querySelectorAll('.conteudo-voltar');
const button_espec = document.querySelectorAll('.especializar');
const button_full = document.querySelectorAll('.fullstack');
const button_finalizar = document.querySelector('.conteudo-finalizar');


let resposta = 0;


//função da primeira pag e do botão "let's go"
button[0].addEventListener("click", () => {
    pagina[0].classList.add('hide');
    pagina[1].classList.remove('hide');

    resposta += 1;
})

//função que leva o usuário para as opções de front-end;
button[1].addEventListener("click", () => {
    pagina[1].classList.add('hide');
    pagina[2].classList.remove('hide');

    resposta *= 1;
})

//função que leva o usuário para as opções de back-end
button[2].addEventListener("click", () => {
    pagina[1].classList.add('hide');
    pagina[3].classList.remove('hide');

    resposta *= 2;
})

//função da pag de front e suas opções derivadas React"3" e Vue"4";
button[3].addEventListener("click", () => {
    pagina[2].classList.add('hide');
    pagina[4].classList.remove('hide');

    resposta *= 1;
})

button[4].addEventListener("click", () => {
    pagina[2].classList.add('hide');
    pagina[5].classList.remove('hide');

    resposta *= 2;
})

//função da pag de back e suas opções derivadas C#"5" e Java"6";
button[5].addEventListener("click",() => {
    pagina[3].classList.add('hide');
    pagina[6].classList.remove('hide');

    resposta *= 2;
})

button[6].addEventListener("click",() => {
    pagina[3].classList.add('hide');
    pagina[7].classList.remove('hide');

    resposta *= 4;
})

//função para os botões Especializar e Fullstack;
for (let x = 0; x < button_espec.length; x++){

    button_espec[x].addEventListener("click",  () => {
        pagina[0].classList.add('hide');
        pagina[1].classList.add('hide');
        pagina[2].classList.add('hide');
        pagina[3].classList.add('hide');
        pagina[4].classList.add('hide');
        pagina[5].classList.add('hide');
        pagina[6].classList.add('hide');
        pagina[7].classList.add('hide');
        pagina[8].classList.remove('hide');

    resposta *= 1;
})}

for (let y = 0; y < button_full.length; y++){

button_full[y].addEventListener("click",  () => {
    pagina[0].classList.add('hide');
    pagina[1].classList.add('hide');
    pagina[2].classList.add('hide');
    pagina[3].classList.add('hide');
    pagina[4].classList.add('hide');
    pagina[5].classList.add('hide');
    pagina[6].classList.add('hide');
    pagina[7].classList.add('hide');
    pagina[8].classList.remove('hide');

    resposta *= 3;
})}

//funcão do botão voltar em todas as pag;
for (let i = 0; i < button_voltar.length; i++)

button_voltar[i].addEventListener("click",  () => {
    window.location.reload();
    
/*for (let p = 1; p < pagina.length; p++) 
pagina[0].classList.remove('hide');
pagina[p].classList.add('hide');
*/
})

//function em desenvolvimento, para guardar os textos no HTML.
/*
const button_mais = document.querySelector('.conteudo-acrescentar');
const valorInput = document.querySelector('.input-linguagem');
const ListUl = document.querySelector('.lista');

    button_mais.addEventListener("click", () => {
        const linguagem = valorInput.value;
        const criandolista= conte(linguagem)
                            .map(l => `<li>${l},</li>`)
                            .join('')
        
        ListUl.innerHTML = criandolista
    })

function conte(inicio){
    let result = []
    if (text = inicio || text != '')
        result.push(text)
    
    return result
}
*/
/* não consegui ir além daqui por enquanto, testei variações disso e não consegui
const button_mais = document.querySelector('.conteudo-acrescentar');

button_mais.addEventListener("click", () => {
    const valorInput = document.querySelector('.input-linguagem');
    const linguagem = valorInput.value;

    for (linguagem != ''){

    }

})

*/
//funcão que desenvolvi para o sistema dar mensagens diferentes para cada 
//caminho que o usuario optar, com base na let resposta!

button_finalizar.addEventListener("click", () => {
        if (resposta == 1){
    alert('Ser um especialista em React seria bem legal mesmo!')}

        if (resposta == 2)
    alert('Ser um especialista em Vue seria bem legal mesmo!')

        if (resposta == 4){
    alert('Ser um especialista em C# seria bem legal mesmo!')}

        if (resposta == 8)
    alert('Ser um especialista em Java seria bem legal mesmo!')

        if (resposta == 3){
    alert('Saber outras linguagens além de React certamente te trará vantagens!')}

       if (resposta == 6)
    alert('Saber outras linguagens além de Vue certamente te trará vantagens!')

        if (resposta == 12){
    alert('Saber outras linguagens além de C# certamente te trará vantagens!')}

        if (resposta == 24)
    alert('Saber outras linguagens além de Java certamente te trará vantagens!')
})
    