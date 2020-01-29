var cards = document.getElementsByClassName('card');
var dots = document.getElementsByClassName('dot');

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    displayTestimony();
    hamburgerMenu();
  }
}

function displayTestimony() {
  hideTestimony(cards);
  cards[0].style.display = "block";
  dots[0].classList.add('dot-focus');

  for (var x = 0; x < dots.length; x++) {
    setInterval(function(y) {
      dots[y].click();
    }, 7000 * (x + 1), x);
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
  setTimeout(function(){ cards[index].style.display = "grid"; }, 500);
  cards[index].classList.add('fadeOut');
  removeDotFocus();
  cards[index].classList.add('fadeIn');
  setTimeout(function(){ cards[index].classList.remove('fadeOut'); }, 500);
  var i = parseInt(cards[index].id.split("testimony_")[1]);
  hideTestimony(cards);
  cards[index].style.display = "block";
  dots[index].classList.add('dot-focus');
}
