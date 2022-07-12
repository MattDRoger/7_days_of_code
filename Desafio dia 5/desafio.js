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
