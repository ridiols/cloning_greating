/*--- gnb navigation이 스크롤 위치에 따라 고정됨--*/

var prevScrollY = window.pageYOffset;

var nav = document.querySelector(".nav_wrapper");
var html = document.documentElement;

window.addEventListener("scroll", function (e) {
  var currentScrollY =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollY > 40) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
  prevScrollY = currentScrollY;
});

nav.addEventListener("click", function () {
  console.log("JS is connected");
});
