function hamburgerMenu() {
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");
  var menu = document.getElementById("icon"); 
  if (menu) {
    menu.addEventListener("click", function() {
      var subMenu = document.getElementsByClassName('sub-menu')[0];
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