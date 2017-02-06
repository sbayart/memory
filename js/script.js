var cardsNumber = 12;

var boardElement = document.getElementById("board");

for (var j = 0; j<2; j++) {
    for (var i = 0; i < cardsNumber/2; i++) {
        var cardElement = document.createElement("div");
        cardElement.innerHTML = i;
        cardElement.className = "card";
        boardElement.appendChild(cardElement);
    }
}
i.addEventListener("click",changeClass)
