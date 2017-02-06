var cardsNumber = 12;

var boardElement = document.getElementById("board");

for (var i = 0; i < cardsNumber; i++) {
    var cardElement = document.createElement("div");
    cardElement.innerHTML = i;
    cardElement.className = "card";
    boardElement.appendChild(cardElement);
}




// var nbredecartes = 12;
//
// var cartes = document.createElement("div");
//     document.body.appendChild(carte);
//
//     for (var nbredecartes = 0; nbredecartes < array.length; nbredecartes++) {
//
//     }
