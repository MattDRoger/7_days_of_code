# Resolução dia 2 do 7 days of code

Olá, foi assim que resolvi o desafio do dia 2.

Desenvolvi uma página web simples contendo as três perguntas sugeridas, suas respectivas caixas de respostas e o botão de enviar.

Criei o arquivo em javascript e escrevi seu código conforme acreditei responder o desafio proposto.
Tive bastante problemas no meu código inicial e tive que pesquisar bastante pra achar soluções, literalmente quebrei minha cabeça kkk
Acredito ter aprendito muito durante minha pesquisa para otimizar meu código também, então estou bem feliz 🤓

Usei Let = document.querySelector() para pegar a informação do botão e o .value para pegar apenas os valores dos campos de respostas.
Tendo essas informações guardadas só precisava escrever a função.

Tentei muitas vezes usando .onclick e não estava avançando da forma que queria, nem mesmo o alert estava saindo, tive que caçar alguma alternativa melhor,
Durante a pesquisa achei o .addEventListener e adaptei meu código criado com ele e pronto, consegui fazer o alert aparecer finalmente, mas ainda não estava 100%.
Por algum motivo o alert não exibia as variáveis que criei, pesquisando um pouco mais descobri a forma correta de escrever variáveis dentro do alert, 
que seria algo parecido com isso: 

alert("texto" + nome da varável + "texto");

Ufa, quanta pesquisa kkk

Mas enfim, acredito que cheguei em um resultado maneiro 🤞

![Print da pag com 3 questões e respectivas caixas de respostas e botão de envio](https://i.imgur.com/U75rvcX.png)

# Resolução dia 3 do 7 days of code

Nesse eu dei um valor "resposta" pra cada botão, e fiz as telas irem trocando conforme o clique, dando um resultado final.

![Uma série de perguntas multiplescolha](https://i.imgur.com/JfVKg42.png)

Ps: Ainda preciso configurar a ultima pergunta.

# Resolução dia 4 do 7 days of code

Criei apenas a primeira tela, bem simples, e coloquei o limitador no botão.

![Uma série de perguntas multiplescolha](https://i.imgur.com/IsjqFd1.png)

# Resolução dia 5 do 7 days of code

Para esse eu apenas criei os algoritimos Javascript, já que estava sem muito tempo para pensar em estética.
o código é esse, porém ainda não solucionei um bug que faz com que, ao clicar na opção de excluir um elemento da lista, ele duplica o ultimo elemento inserido. mas esta funcionando :v


<- código ->

let item = "";
let nao = false;
let fruta = [];
let laticinios = [];
let congelados = [];
let doces = [];

for (let contador = 0; contador < 50; contador++){
    item = prompt("Gostaria de acrescentar algum item à sua lista de compras alimentar? S ou N?");
        if (item == "N"){
        alert("Lista de compras:\nFrutas:  "+ fruta + ";\nLaticínios:  " + laticinios + ";\nCongelados:  "+ congelados +";\nDoces:  "+ doces);
        nao = true;
        break;
    }
    if (item == "S"){
    comida = prompt("Qual seria?");
    }
    if (comida != ""){ 
        prateleira = prompt('Em qual dessas prateleiras esse produto pode estar? \n1.Frutas , 2.Laticínios , 3.Congelados , 4.Doces.\nResponda apenas com o número da prateleira.')
    }
    if (prateleira == 1){
        fruta.push(comida);
    }
    if (prateleira == 2){
        laticinios.push(comida);
    }
    if (prateleira == 3){
        congelados.push(comida);
    }
    if (prateleira == 4){
        doces.push(comida);
    }
}

<- / código ->

# Resolução dia 6 do 7 days of code

Para esse eu também apenas criei os algoritimos Javascript, pois fiz ambos no mesmo dia.
o código é esse, porém ainda não solucionei um bug que faz com que, ao clicar na opção de excluir um elemento da lista, ele duplica o ultimo elemento inserido. mas esta funcionando :v \o/ ;


<- código ->

let item = "s";
let fruta = [];
let laticinios = [];
let congelados = [];
let doces = [];
let excluir = "";
let itemExcluir = "";

while (item != "n"){
    item = prompt("Gostaria de acrescentar algum item à sua lista de compras alimentar?\nResponda apenas com 's' ou 'n'." + excluir);
    while (item != "s" && item != "n" && item != "e"){
        alert(`Não foi reconhecido o comando!`)
        item = prompt("Gostaria de acrescentar algum item à sua lista de compras alimentar?\nResponda apenas com 's' ou 'n'." + excluir);
    }

    if (item === "n"){
        break;
     }

    else if (item === "s"){
        comida = prompt("Qual item gostaria de acrescentar?");
        prateleira = prompt('Em qual dessas prateleiras esse produto pode estar? \n1.Frutas , 2.Laticínios , 3.Congelados , 4.Doces.\nResponda apenas com o número da prateleira.')
    } else {
        alert(`Não foi reconhecido o comando!`)
    }

    if (fruta != [] || laticinios != [] || congelados != [] || doces != []){
        excluir = ('\nSe desejar excluir algum item da lista, digite: "e"')
    }

    if (prateleira === '1'){
        fruta.push(comida);
    } else if (prateleira === '2'){
        laticinios.push(comida);
    } else if (prateleira === '3'){
        congelados.push(comida);
    } else if (prateleira === '4'){
        doces.push(comida);
    } else {
        alert(`Não foi reconhecido o comando!`);
    }
    
    while (item === "e"){
        itemExcluir = prompt(`Qual item gostaria de Excluir dessa lista?\nFrutas: ${fruta};\nLaticínios: ${laticinios};\nCongelados: ${congelados};\nDoces: ${doces}`);
        
        if (fruta.includes(itemExcluir) === true){
            var indexFruta = fruta.indexOf(itemExcluir);

            fruta.splice(indexFruta);

        } else if (laticinios.includes(itemExcluir) === true){
            var indexLaticinios = laticinios.indexOf(itemExcluir);

            laticinios.splice(indexLaticinios);

        } else if (congelados.includes(itemExcluir) === true){
            var indexCongelados = congelados.indexOf(itemExcluir);

            congelados.splice(indexCongelados);

        } else if (doces.includes(itemExcluir) === true){
            var indexDoces = doces.indexOf(itemExcluir);

            doces.splice(indexDoces);
        } else {
    alert(`Item não encontrado em nenhuma lista`);
        }
        break;
    }
}

alert(`Lista de compras:\nFrutas: ${fruta};\nLaticínios: ${laticinios};\nCongelados: ${congelados};\nDoces: ${doces}`);

<- / código ->

# Resolução dia 7 do 7 days of code

Chegamos ao ultimo e mais complicado de todos, confesso que foi complicado.
Meu código ficou um tanto bagunçado, acabei dificultando bastante pra deixar como ficou, mas gostei muito do desafio.

![calculadora](https://i.imgur.com/lRcStCq.png)

Esse me desafiou de verdade, pesquisei bastante pra conseguir resolver os problemas que não paravam de aparecer, acho que fui além do que tinha aprendido até aquele momento ("kkkkk"), o que me fez evoluir bastante.
Chegando ao final, gostaria de agradecer ao apoio que tive no grupo do Discord Alura, foi bem legal todo esse suporte!