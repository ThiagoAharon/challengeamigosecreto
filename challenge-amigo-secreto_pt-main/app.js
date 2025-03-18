//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let inputField = document.getElementById("amigo");
    let nome = inputField.value.trim(); // Captura o valor e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe alerta se o campo estiver vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarListaAmigos(); // Atualiza a exibição da lista
    inputField.value = ""; // Limpa o campo de entrada
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = amigos[i];
        lista.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = `<p>Amigo sorteado: <strong>${amigoSorteado}</strong></p>`;
}


