/*--- main Slider --------*/

let slideContainer = document.querySelector(".mainSlider_lists");
let slides = document.querySelectorAll(".mainSlider_list"); // 이미지들을 저장한 배열
let prev = document.querySelector(".mainSlider_prev");
let next = document.querySelector(".mainSlider_next");
let totalIdx = slides.length - 1; //2
var currentIdx = 0;

init(currentIdx);

prev.addEventListener("click", (event) => MoveSlide(-1));
next.addEventListener("click", (event) => MoveSlide(1));

function init(n) {
  console.log("init");
  console.log(currentIdx);
  // slides.style.transition = "all 0.4s ease-in-out";
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function MoveSlide(n) {
  if (n === 1 && currentIdx === totalIdx) {
    //next
    currentIdx = 0;
  } else if (n === -1 && currentIdx === 0) {
    //prev
    currentIdx = totalIdx;
  } else {
    currentIdx += n;
  }
  init(currentIdx);
  console.log("MoveSlide", currentIdx);
}

// function TimeSlide() {}
