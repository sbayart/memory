var cardsNumber = 12;

var boardElement = document.getElementById("board");

var cardRetournee1 = null;
var cardRetournee2 = null;

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
            if(cardRetournee1==null && cardRetournee2==null){
                this.style.display="none";
                cardRetournee1 = this;
            } else if (cardRetournee1!=null && cardRetournee2==null) {
                this.style.display="none";
                cardRetournee2 = this;
            } else if (cardRetournee1!=null && cardRetournee2!=null) {
                var frangin1 = cardRetournee1.previousSibling.innerHTML;
                var frangin2 = cardRetournee2.previousSibling.innerHTML;
                if (frangin1==frangin2) {
                    cardRetournee1=this;
                    cardRetournee2=null;
                    this.style.display="none";

                } else {
                    cardRetournee1.style.display="block";
                    cardRetournee2.style.display="block";
                    cardRetournee1=this;
                    cardRetournee2=null;
                    this.style.display="none";
                }
            }
        });

    }
}
