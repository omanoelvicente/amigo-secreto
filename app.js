//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];


function addFriend() {
    let getFriend = document.getElementById("friend").value;

    if (getFriend == '') {
        document.getElementById("message").innerHTML = 'Por favor, insira um nome';
    } else {
        friends.push(getFriend);
        clearField();
        createListOfFriends(friends);
    }

}

function createListOfFriends() {
    let setFriend = "";
    friends.forEach((friend) => {
        setFriend += "<li>" + friend + "</li>";
    });

    document.getElementById("listOfFriends").innerHTML = setFriend;
}

function sortFriend() {
    let numberCount = friends.length;
    if (friends.length > 0 ) {
         let numberSorted = Math.floor(Math.random() * numberCount);
         document.getElementById("result").innerHTML = "<li>" + friends[numberSorted] + "</li>";

    } else {
        document.getElementById("message").innerHTML = 'Não há nomes para sortear';
    }
} 


function clearField() {
    document.getElementById("friend").value = '';
    document.getElementById("message").innerText = '';
}
