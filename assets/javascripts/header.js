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

document.addEventListener('readystatechange', (event) => {
  lazyLoadImage();
})

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

function lazyLoadImage() {
  let wrappers = document.getElementsByClassName('illustration');

  for (var i = 0; i < wrappers.length; i++) {
    let wrapper = wrappers[i]
    let img     = wrapper.lastElementChild;
    img.src     = wrapper.dataset.src;

    img.onload = function() {
      img.style.display             = 'block';
      wrapper.style.backgroundColor = 'unset'
      wrapper.style.filter          = 'none';
    }
  }
}
