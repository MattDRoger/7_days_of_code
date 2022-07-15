(() => {
    const operacoes = document.querySelectorAll('[data-operacao');

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