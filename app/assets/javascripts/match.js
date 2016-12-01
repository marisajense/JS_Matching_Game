$(document).ready(function() {

var $cards = $('.cards');
var cardOne, cardTwo;
var alert = $('.alert');
var winNum = 0;
var count = $('.counter');
var game = $('.game');
var newGame = $('.new-game');

var animalArray = ['Dog', 'Cat', 'Turtle', 'Lion', 'Tiger', 'Bear', 'Elephant', 'Monkey', 'Dog', 'Cat', 'Turtle',
          'Lion', 'Tiger', 'Bear', 'Elephant', 'Monkey']

  function reshuffle() {
    var j, x, i;
    for (i = animalArray.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = animalArray[i - 1];
      animalArray[i - 1] = animalArray[j];
      animalArray[j] = x;
    }
    animalArray.forEach( function(card,i) {
      $cards.children('p')[i].innerHTML = card
    })
  }

function evaluate() {
  if(cardOne.text() === cardTwo.text()) {
    alert.text('Match!').fadeOut(1000);
    // cardOne.parent().removeClass('card')
    // cardTwo.parent().removeClass('card')
    cardOne = null;
    cardTwo = null;
    winNum += 1;
    count.text(winNum)
    reEval();
  } else {
    alert.text('Try Again!').fadeOut(1000);
    cardOne.fadeOut(1000);
    cardTwo.fadeOut(1000);
    cardOne = null;
    cardTwo = null;
  }
}


$cards.click(function() {
  alert.text('').show();
  var card = $(this).children();
  if(!cardOne) {
    cardOne = card;
    card.show();
  } else {
    cardTwo = card;
    card.show();
    evaluate();
  }
  });

function reEval() {
  if(winNum === 8) {
    alert.text('You Win!!')
    game.hide();
    newGame.show();
    reshuffle();
  }
}

newGame.click(function(){
  for(var i = 0; i < $cards.length; i++) {
    $($cards[i]).find('p').hide()
  }
  game.show();
  newGame.hide();
  winNum = 0;
  count.text(winNum);
});

reshuffle();
});
