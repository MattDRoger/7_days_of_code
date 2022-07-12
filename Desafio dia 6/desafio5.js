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