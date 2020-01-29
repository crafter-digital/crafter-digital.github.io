document.onreadystatechange = function () {
  hamburgerMenu();

  var nav_menu = document.getElementsByClassName('nav_menu');

  for (var i = 0; i < nav_menu.length; i++) {
    if(location.href == nav_menu[i].href) {
      nav_menu[i].classList.add('nav_menu__active');
    }
  }
}
