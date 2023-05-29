const botaoMenu = document.querySelector('.cabecalho-menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click',() =>{
    menu.classList.toggle('menu-lateral_ativo')
}) 
/*toogle = cria a função que, ao clicar no botão do menu, troca a class automaticamente, fazendo abrir e fechar o menu lateral*/