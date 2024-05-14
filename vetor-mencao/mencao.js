var mencao = []; // Array para armazenar os itens inseridos pelo usuário

function executar() {
    var nota = document.getElementById("inserirNota").value;
    
    if (mencao.length < 10) { // Verifica se ainda não foram inseridos 10 itens
        mencao.push(nota); // Adiciona o item ao array
        document.getElementById("resultado").innerText = "Menção " + (mencao.length) + " inserido com sucesso."; // Exibe mensagem de confirmação
        document.getElementById("resultado").innerText = mencao.length + "° Menção inserida com sucesso" + "\n" + mencao + "\n"; // Exibe mensagem de erro caso já tenham sido inseridos 10 itens

    } else {
        document.getElementById("resultado").innerText = "Todas as menções foram cadastradas!"
    }



}
