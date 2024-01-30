/*
Objetivo 1: Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleçao de plataformas no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - quando o usuário clicar, adicionar a classe ativo no botão para que o conteúdo dele apareça

Objetivo 2: Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    Passo 1 - verificar se o botão já foi ativado pelo usuário, se sim devemos remover a classe ativo para que ele esconda o conteúdo novamente
*/

const button = document.querySelector('.btn-plataform');
const contentPlataforms = document.querySelector('.btn-plataform .plataforms');

button.addEventListener('click', () => {
    contentPlataforms.classList.toggle('active')
})