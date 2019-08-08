document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.getElementById("menu-icon").addEventListener("click", function() {
      var subMenu = document.getElementsByClassName('sub-menu')[0];
      if (subMenu.style.display == 'none' || subMenu.style.display == '') {
        subMenu.style.display = 'block';
      } else {
        subMenu.style.display = 'none';
      }
    });
  }
}