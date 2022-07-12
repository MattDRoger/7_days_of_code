# Resolução dia 2 do 7 days of code

Olá, foi assim que resolvi o desafio do dia 2.

Desenvolvi uma pagina web simples contendo as três perguntas sujeridas, suas respectivas caixas de respostas e o botão de enviar.

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
