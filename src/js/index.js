const imagensBanner = document.querySelectorAll('.imagem')
const botoesBanner = document.querySelectorAll('.botao')
const historia = document.querySelectorAll('.parteHistoria')

const botaoMenuResponsivo = document.querySelector('.menuResponsivo')
const imagemBotaoMenu = document.querySelector('.imagemMenu')
const menuLista = document.querySelector('.menu')

function abrirMenuResponsivo() {
    let classeBotao = botaoMenuResponsivo.classList

    if (classeBotao == 'menuResponsivo ativo') {
        botaoMenuResponsivo.classList.remove('ativo')
        menuLista.classList.remove('ativo')
        imagemBotaoMenu.setAttribute('src', './src/images/icons-menu-50.png')
    }
    else {
        botaoMenuResponsivo.classList.add('ativo')
        menuLista.classList.add('ativo')
        imagemBotaoMenu.setAttribute('src', './src/images/icons-excluir-50.png')
    }
}

function trocarBotaoBanner(botao) {
    var botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
    botao.classList.add('selecionado')
}

function trocarImagemBanner(index) {
    var imagemAtiva = document.querySelector('.imagem.ativa')
    imagemAtiva.classList.remove('ativa')
    imagensBanner[index].classList.add('ativa')
}

function trocarTextoBanner(index) {
    var parteHistoria = document.querySelector('.parteHistoria.ativa')
    parteHistoria.classList.remove('ativa')
    historia[index].classList.add('ativa')
}

function bannerAutomatico(index){
    
    let proximo

    if (index < (botoesBanner.length - 1)){
        proximo = index +  1
    }else{
        proximo = 0
    }

    trocarBotaoBanner(botoesBanner[index])
    trocarImagemBanner(index)
    trocarTextoBanner(index)

    banner = setInterval(() => {

        trocarBotaoBanner(botoesBanner[proximo])
        trocarImagemBanner(proximo)
        trocarTextoBanner(proximo)

        if (proximo < (botoesBanner.length - 1)){
            proximo = proximo +  1
        }else{
            proximo = 0
        }

    }, 10000);
}

botaoMenuResponsivo.addEventListener('click', ()=>{

    abrirMenuResponsivo()

})


botoesBanner.forEach((botao, index) => {
    botao.addEventListener('click', () =>{

    trocarBotaoBanner(botao)
    trocarImagemBanner(index)
    trocarTextoBanner(index)
    
    clearInterval(banner)
    bannerAutomatico(index)

    })
});

document.addEventListener('onLoad', bannerAutomatico(0))

