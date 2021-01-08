window.onscroll = function() {stickyMenu()};

const menu = document.querySelector('.main-back');
const stickyDOM = document.querySelector('.header-nav');
const sticky = stickyDOM.offsetTop + stickyDOM.offsetHeight;

function stickyMenu() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

export { stickyMenu }