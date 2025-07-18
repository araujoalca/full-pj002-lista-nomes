const pessoas = [
    "Pedro",
    "João",
    "Maria",
    "Ana",
    "José",
    "Lucas",
    "Paula",
    "Fernanda",
    "Roberto",
    "Carla"
];

function realizarBusca() {
    let texto_busca = document.querySelector('.texto').value.toLowerCase();

    if (texto_busca === '') {
        alert('Por favor, insira um nome para buscar.');
    } else {
        const listGroup = document.querySelector('.list-group');
        listGroup.innerHTML = ''; // Limpa a lista
        for (let indice in pessoas) {
            if (pessoas[indice].toLowerCase().includes(texto_busca)) {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = pessoas[indice];
                listGroup.appendChild(li);
            }
        }


        if (listGroup.innerHTML.trim() !== '') {
            listGroup.style.display = 'block';
        } else {
            limparLista(); // Limpa a lista se não houver resultados
        }

    }
}

function renderizarLista() {
    const listGroup = document.querySelector('.list-group');
    listGroup.innerHTML = ''; // Limpa a lista
    for (let indice in pessoas) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = pessoas[indice];
        listGroup.appendChild(li);
    }

    // Se a lista for preenchida com sucesso (ou seja, tem conteúdo)
    if (listGroup.innerHTML.trim() !== '') { // Verifica se há conteúdo após preencher
        listGroup.style.display = 'block'; // Ou 'flex', se for o caso do seu CSS
        // } else {
        //     // Se por algum motivo não houver dados, garanta que ela esteja escondida
        //     listGroup.style.display = 'none';
    }
}

function limparLista() {
    const listGroup = document.querySelector('.list-group');
    listGroup.innerHTML = ''; // Limpa a lista

    let texto_busca = document.getElementsByClassName('texto')[0];
    texto_busca.value = ''; // Limpa o campo de busca

    verificarListaVazia();
}


function verificarListaVazia() {
    const listGroup = document.querySelector('.list-group');

    // Se não houver nenhum elemento filho (<li>) dentro da lista, adicione a mensagem
    if (listGroup.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Lista vazia...';
        // Adiciona classes para estilizar a mensagem, como texto cinza
        li.classList.add('list-group-item', 'text-muted');
        listGroup.appendChild(li);
    }
}



const caixaDePesquisa = document.getElementById('caixaDePesquisa');
const botaoPesquisar = document.getElementById('botaoPesquisar');

// Adiciona um "ouvinte" de evento para quando uma tecla é pressionada na caixa de pesquisa
caixaDePesquisa.addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é a "Enter"
    if (event.key === 'Enter') {
        // Previne o comportamento padrão do navegador para a tecla Enter (que pode submeter um formulário)
        event.preventDefault();

        // Verifica se o botão "Pesquisar" não está desabilitado (ou seja, se há texto na caixa)
        // Isso é importante porque seu botão só habilita com conteúdo, então a busca só ocorre se houver algo digitado.
        if (!botaoPesquisar.disabled) {
            // Simula um clique no botão "Pesquisar"
            botaoPesquisar.click();
        }
    }
});