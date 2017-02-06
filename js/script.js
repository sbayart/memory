var cardsNumber = 12;

var boardElement = document.getElementById("board");

for (var j = 0; j<2; j++) {
    for (var i = 0; i < cardsNumber/2; i++) {
        var cardElement = document.createElement("div");
        cardElement.className = "card";
        boardElement.appendChild(cardElement);

        var cardValeurElement = document.createElement("div");
        cardValeurElement.innerHTML = i;
        cardValeurElement.className = "valeur";
        cardElement.appendChild(cardValeurElement);

        var cardCacheElement = document.createElement("div");
        cardCacheElement.className = "masque";
        cardElement.appendChild(cardCacheElement);

        cardCacheElement.addEventListener("click", function(){
            this.style.display="none";
    });
}
}
