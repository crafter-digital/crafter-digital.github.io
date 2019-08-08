document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var menuIcon = document.getElementById("menu-icon");
    var closeIcon = document.getElementById("close-icon");
    document.getElementById("icon").addEventListener("click", function() {
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