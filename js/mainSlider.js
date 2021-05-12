/*--- main Slider --------*/

let slideContainer = document.querySelector(".mainSlider_lists");
let slides = document.querySelectorAll(".mainSlider_list"); // 이미지들을 저장한 배열
let prev = document.querySelector(".mainSlider_prev");
let next = document.querySelector(".mainSlider_next");
let totalIdx = slides.length - 1; //2
var currentIdx = 0;

showSlide(currentIdx);

prev.addEventListener("click", (event) => MoveSlide(-1), false);
next.addEventListener("click", (event) => MoveSlide(1), false);

function showSlide(n) {
  console.log("init");
  console.log(currentIdx);
  for (let i = 0; i < slides.length; i++) {
    // slides[i].style.opacity = "0";
    slides[i].style.display = "none";
  }
  // slides[i].style.opacity = "1";
  slides[n].style.display = "block";
}

function MoveSlide(n) {
  console.log(currentIdx);
  if (n === 1 && currentIdx === totalIdx) {
    currentIdx = 0;
  } else if (n === -1 && currentIdx === 0) {
    currentIdx = totalIdx;
  } else {
    currentIdx += n;
  }
  showSlide(currentIdx);
  console.log("MoveSlide", currentIdx);
}
