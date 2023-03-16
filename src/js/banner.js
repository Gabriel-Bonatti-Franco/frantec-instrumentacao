const imagens = document.querySelectorAll('.imagem')
const botoes = document.querySelectorAll('.botao')

function trocarImagem(index) {
    var imagemAtiva = document.querySelector('.imagem.ativa')
    imagemAtiva.classList.remove('ativa')
    imagens[index].classList.add('ativa')
}

function trocarBotao(botao) {
    var botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
    botao.classList.add('selecionado')
}

function bannerAutomatico(index){
    
    let proximo

    if (index < (botoes.length - 1)){
        proximo = index +  1
    }else{
        proximo = 0
    }

    trocarBotao(botoes[index])
    trocarImagem(index)

    banner = setInterval(() => {

        trocarBotao(botoes[proximo])
        trocarImagem(proximo)

        if (proximo < (botoes.length - 1)){
            proximo = proximo +  1
        }else{
            proximo = 0
        }

    }, 3000);
}

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () =>{

    trocarBotao(botao)
    trocarImagem(index)
    
    clearInterval(banner)
    bannerAutomatico(index)

    })
});

document.addEventListener('onLoad', bannerAutomatico(0))
