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
      console.log(this.deck[x].value)
    }

  }


}

let deck = new Deck();
deck.makeDeck();
deck.printDeck();
