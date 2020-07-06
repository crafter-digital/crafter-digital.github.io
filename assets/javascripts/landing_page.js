var cards    = document.getElementsByClassName('card');
var dots     = document.getElementsByClassName('dot');
var interval = null;

document.addEventListener('readystatechange', (event) => {
  displayTestimony(0);
});

function displayTestimony(index) {
  var i = index;

  hideTestimony(cards);
  removeDotFocus();
  cards[0].style.display = "block";
  dots[0].classList.add('dot-focus');

  if (!interval) {
    interval = setInterval(
      function() {
        showTestimony(i+1);
        i >= (dots.length - 1) ? i = i - (dots.length - 1) : i++;
      }, 5000
    );
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

function pauseInterval(index) {
  clearInterval(interval);
  interval = null;
  showTestimony(index);
}

function showTestimony(index) {
  var currentCard = '';
  for(var i = 0; i < cards.length; i++) {
    if (cards[i].style.display != 'none') {
      currentCard = cards[i]
    }
  }

  index = index == 3 ? 0 : index;

  currentCard.classList.remove('fadeIn');
  currentCard.classList.add('fadeOut');
  setTimeout(function(){ currentCard.style.display = 'none'; }, 500);
  removeDotFocus();
  setTimeout(function(){ cards[index].classList.remove('fadeOut'); }, 500);
  hideTestimony(cards);
  cards[index].style.display = "block";
  dots[index].classList.add('dot-focus');
}
