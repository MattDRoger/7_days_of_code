let enviar = document.querySelector('input[type="submit"]');


enviar.addEventListener("click" || "enter", () => {
  let nome = document.querySelector('#nome').value;
  let idade = document.querySelector('#idade').value;
  let linguagem = document.querySelector('#linguagem').value;
      
  var msg = ("Olá " + nome + ", você tem " + idade +" anos e já esta estudando " + linguagem + "!");

  if (nome && idade && linguagem != '' )
  alert(msg);
    });
