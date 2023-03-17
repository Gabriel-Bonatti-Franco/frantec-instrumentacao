const botaoResponsivo = document.querySelector('.menuResponsivo')
const imagemBotaoMenu = document.querySelector('.imagemMenu')
const menuLista = document.querySelector('.menu')

botaoResponsivo.addEventListener('click', ()=>{

    let classeBotao = botaoResponsivo.classList

    if (classeBotao == 'menuResponsivo ativo') {
        botaoResponsivo.classList.remove('ativo')
        menuLista.classList.remove('ativo')
        imagemBotaoMenu.setAttribute('src','./src/images/icons-menu-50.png')
    }
    else{
        botaoResponsivo.classList.add('ativo')
        menuLista.classList.add('ativo')
        imagemBotaoMenu.setAttribute('src','./src/images/icons-excluir-50.png')
    }

})