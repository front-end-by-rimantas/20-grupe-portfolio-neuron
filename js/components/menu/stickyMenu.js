window.onscroll = function() {stickyMenu()};

var menu = document.querySelector('.main-back');
var stickyDOM = document.querySelector('.header-nav');
var sticky = stickyDOM.offsetTop + stickyDOM.offsetHeight;

function stickyMenu() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

export { stickyMenu }