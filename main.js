function functionName(){
    alert("Heello World")
}

Suzy = {id:"suzylafayettesm", name:"Suzy Lafayettesm", health:4, rank:"S", ability:"As soon as she has no cards in hand,"+
"she draws a card from the draw pile.", pick:false, ban: false}

Jose = {id:"josedelgadosm", name:"Jose Delgadosm", health:4, rank:"S", ability:"During his turn, he may discard a "+
"blue card from the hand to draw 2 cards.", pick: false, ban: false }

character = [Suzy, Jose];
ban = [];
numPlayer = 4;

function parseName(id){
    var name = document.getElementById(id).firstElementChild.alt;
    var char = null; 
    for (x = 0 ; x < character.length; x++){
        if (name == character[x].id){
            char = character[x];
        }
    }
    alert(char.ability);
    showStatus(char);
}

function showStatus(id){
    var name = "Name: " + id.name;
    var health = "Health: " + id.health;
    var ability = "Ability: " + id.ability;
    document.getElementById("Status-name").innerHTML = name;
    document.getElementById("Status-health").innerHTML = health;
    document.getElementById("Status-ability").innerHTML = ability;
}



