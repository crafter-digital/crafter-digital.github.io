var cards = document.getElementsByClassName('card');
var dots = document.getElementsByClassName('dot');

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    hideTestimony(cards);
    cards[0].style.display = "block";
    setInterval(function() { dots[1].click() }, 7000);
    setInterval(function() { dots[2].click() }, 14000);
    setInterval(function() { dots[3].click() }, 21000);
    setInterval(function() { dots[4].click() }, 28000);
    setInterval(function() { dots[0].click() }, 35000);
  }
}

function hideTestimony(cards) {
  for(var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
}

function removeDotFocus() {
  for(var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('dot-focus');
  }
}

function showTestimony(index) {
  var card = '';
  for(var i = 0; i < cards.length; i++) {
    if (cards[i].style.display != 'none') {
      card = cards[i]
    }
  }
  card.classList.remove('fadeIn');
  card.classList.add('fadeOut');
  setTimeout(function(){ card.style.display = 'none'; }, 500);
  setTimeout(function(){ cards[index].style.display = "block"; }, 500);
  cards[index].classList.add('fadeOut')
  cards[index].classList.add('fadeIn');
  setTimeout(function(){ cards[index].classList.remove('fadeOut'); }, 700);
  var i = parseInt(cards[index].id.split("testimony-")[1]);
  hideTestimony(cards);
  cards[index].style.display = "block";
}


for(var i = 0; i < cards.length; i++) {
  if (cards[i].style.display == 'block') {
    var card = cards[i];
  };
}
// var id = parseInt(card.id.split("testimony-")[1]);
// var dot = document.getElementById('dot-' + (id + 1));
// dot.click();
// removeDotFocus(id - 1);
// dot.classList.add('dot-focus');