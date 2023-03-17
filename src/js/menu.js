const botaoResponsivo = document.querySelector('.menuResponsivo')
const menuLista = document.querySelector('.menu')

botaoResponsivo.addEventListener('click', ()=>{

    let classeBotao = botaoResponsivo.classList

    if (classeBotao == 'menuResponsivo ativo') {
        botaoResponsivo.classList.remove('ativo')
        menuLista.classList.remove('ativo')
    }
    else{
        botaoResponsivo.classList.add('ativo')
        menuLista.classList.add('ativo')
    }

})