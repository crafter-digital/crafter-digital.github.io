document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    hamburgerMenu();
  
    var nav_menu = document.getElementsByClassName('nav_menu');
  
    for (var i = 0; i < nav_menu.length; i++) {
      if(location.href == nav_menu[i].href) {
        nav_menu[i].classList.add('nav_menu__active');
      }
    }
  }
}

function hamburgerMenu() {
  var menuIcon = document.getElementById("menu_icon");
  var closeIcon = document.getElementById("close_icon");
  var menu = document.getElementById("icon"); 
  if (menu) {
    menu.addEventListener("click", function() {
      var subMenu = document.getElementsByClassName('sub_menu')[0];
      if (subMenu.style.display == 'none' || subMenu.style.display == '') {
        subMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        subMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  }
}
