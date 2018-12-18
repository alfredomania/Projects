class Deck{
  constructor(){
    this.deck = [];
  }
  makeDeck(){
    let card = (value, suit) =>{
      this.value = value;
      this.suit = suit;
      this.cardName = value + ' of ' + suit;
      return {cardName:this.cardName, suit:this.suit, value:this.value}
    }
    let values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
    let suites = ['Clubs','Dimaonds','Spades','Hearts']

    for(let s=0; s<suites.length; s++){
      for(let v = 0; v<values.length; v++){
          this.deck.push(card(values[v], suites[s]))
      }
    }

  }
  printDeck(){
    for(let x = 0; x<this.deck.length; x++){
      document.getElementById("demo").innerHTML = this.deck[x].cardName;
    }


  }
  draw(){
    if(this.deck.length < 1)return document.getElementById("new").innerHTML = "Out of cards!";


    document.getElementById("new").innerHTML = this.deck[this.deck.length - 1].cardName;
    this.deck.pop();

  }
  shuffle(){
       let currentIndex = this.deck.length, temporaryValue, randomIndex;

      while(0 != currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
        temporaryValue = this.deck[currentIndex];
        this.deck[currentIndex] = this.deck[randomIndex];
        this.deck[randomIndex] = temporaryValue;

      }

  }
}
//end of classes


function play(){


document.getElementById("new").innerHTML = "new deck made";
deck = new Deck();
deck.makeDeck();
deck.shuffle();

}


function nextCard(){

    deck.draw();

}
