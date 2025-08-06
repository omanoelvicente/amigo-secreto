//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];

function addFriend() {
    let getFriend = document.getElementById("friend").value;

    if (getFriend == '') {
        let message = document.getElementById("message");
        message.innerHTML = 'Por favor, insira um nome';
    } else {
        friends.push(getFriend);
        console.log(friends);
        clearField();
    }

}

function clearField() {
    document.getElementById("friend").value = '';
    document.getElementById("message").innerText = '';
}
