$(document).ready(function(){
    var cardsNumber = 12;
    var cardRetournee1 = null;
    var cardRetournee2 = null;

    var board = $("#board");
    for (var j = 0; j<2; j++) {
        for (var i = 0; i < cardsNumber/2; i++) {
            var card = $('<div class="card"></div>');
            board.append(card);
            var valeur = $('<div class="valeur">'+i+'</div>')
            var masque = $('<div class="masque"></div>');
            card.append(valeur, masque)            
        };
    };
    $(".masque").click(function(){
        if(cardRetournee1==null && cardRetournee2==null){
            $(this).css("display","none");
            cardRetournee1 = $(this);
        } else if (cardRetournee1!=null && cardRetournee2==null) {
            $(this).css("display","none");
            cardRetournee2 = $(this);
        } else if (cardRetournee1!=null && cardRetournee2!=null) {
            var frangin1 = cardRetournee1.prev().html();
            var frangin2 = cardRetournee2.prev().html();
            if (frangin1==frangin2) {
                cardRetournee1=$(this);
                cardRetournee2=null;
                $(this).css("display","none");

            } else {
                cardRetournee1.css("display","block");
                cardRetournee2.css("display","block");
                cardRetournee1=$(this);
                cardRetournee2=null;
                $(this).css("display","none");
            };
        };
    });
    $(function () {
        var parent = $(".shuffle");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });
})
