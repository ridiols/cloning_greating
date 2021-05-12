let infoSlider = document.querySelector(".info .slider");
let infoContainer = document.querySelector(".info .sliders");
let infoSlideIdx = document.querySelectorAll(".info .sliders").length - 1;

var infoCurrentIdx = 0;

let infoLeft = document.querySelector(".info .left");
let infoRight = document.querySelector(".info .right");

infoLeft.addEventListener("click", InfoMoveSlide(-1));
infoRight.addEventListener("click", InfoMoveSlide(1));

function InfoMoveSlide() {}

// funciton initSlide(){
//   console.log(containerX);
//   if(infoCurrentIdx <= 0){

//   }else(infoCurrentIdx )
// }

// initSlide(infoCurrentIdx);
