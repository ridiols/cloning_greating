var slide = document.querySelector(".notices");

setInterval("loopSlider()", 2000);

function loopSlider() {
  slide.style.transition = "all 1s";
  slide.style.transform = "translateY(calc(-25% + 10px))";
  setTimeOutEnd();
}

function setTimeOutEnd() {
  setTimeout(() => {
    slide.appendChild(slide.firstElementChild);
    slide.style.transition = "none";
    slide.style.transform = "translateY(0)";
  }, 1000);
}
