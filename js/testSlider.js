const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let direction;

next.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
});

prev.addEventListener("click", function () {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});

slider.addEventListener(
  "transitionend",
  function () {
    // get the last element and append it to the front

    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    });
  },
  false
);

/**------------------------------------------ */
var slide = document.querySelector(".slideTest");

setInterval("loopSlider()", 2000);

function loopSlider() {
  slide.style.transition = "all 1s";
  slide.style.transform = "translateY(calc(-20% + 12px))";
  console.log("do slider");
  setTimeOutEnd();
}

function setTimeOutEnd() {
  setTimeout(() => {
    slide.appendChild(slide.firstElementChild);
    slide.style.transition = "none";
    slide.style.transform = "translateY(0)";
  }, 1000);
  console.log("end slider");
}

/**------------------------------------------ */

// var index = 0,
//   amount = 0,
//   currTransl = [],
//   translationComplete = true,
//   moveOffset = 0;

// var transitionCompleted = function () {
//   translationComplete = true;
// };

// document.addEventListener("DOMContentLoaded", function (event) {
//   var carousel = document.getElementById("carousel");

//   amount = document.getElementsByClassName("slide").length;
//   // get the width of the container
//   moveOffset = parseInt(
//     window.getComputedStyle(document.getElementById("carousel-container"))
//       .width,
//     10
//   );
//   // calcuate the width of the carousel
//   document.getElementById("carousel").style.width = amount * moveOffset + "px";
//   // prevent multiple click when transition
//   for (var i = 0; i < amount; i++) {
//     currTransl[i] = -moveOffset;
//     document
//       .getElementsByClassName("slide")
//       [i].addEventListener("transitionend", transitionCompleted, true);
//     document
//       .getElementsByClassName("slide")
//       [i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
//     document
//       .getElementsByClassName("slide")
//       [i].addEventListener("oTransitionEnd", transitionCompleted, true);
//     document
//       .getElementsByClassName("slide")
//       [i].addEventListener("MSTransitionEnd", transitionCompleted, true);
//   }
//   // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
//   document
//     .getElementById("carousel")
//     .insertBefore(
//       document.getElementById("carousel").children[4],
//       document.getElementById("carousel").children[0]
//     );
//   // add click events to control arrows
//   document.getElementById("prev").addEventListener("click", prev, true);
//   document.getElementById("next").addEventListener("click", next, true);
// });

// function prev() {
//   if (translationComplete === true) {
//     translationComplete = false;
//     index--;
//     if (index == -1) {
//       index = amount - 1;
//     }
//     var outerIndex = index % amount;
//     for (var i = 0; i < amount; i++) {
//       var slide = document.getElementsByClassName("slide")[i];
//       slide.style.opacity = "1";
//       slide.style.transform =
//         "translateX(" + (currTransl[i] + moveOffset) + "px)";
//       currTransl[i] = currTransl[i] + moveOffset;
//     }
//     var outerSlide = document.getElementsByClassName("slide")[outerIndex];
//     outerSlide.style.transform =
//       "translateX(" + (currTransl[outerIndex] - moveOffset * amount) + "px)";
//     outerSlide.style.opacity = "0";
//     currTransl[outerIndex] = currTransl[outerIndex] - moveOffset * amount;
//   }
// }

// function next() {
//   if (translationComplete === true) {
//     translationComplete = false;
//     var outerIndex = index % amount;
//     index++;
//     for (var i = 0; i < amount; i++) {
//       var slide = document.getElementsByClassName("slide")[i];
//       slide.style.opacity = "1";
//       slide.style.transform =
//         "translateX(" + (currTransl[i] - moveOffset) + "px)";
//       currTransl[i] = currTransl[i] - moveOffset;
//     }
//     var outerSlide = document.getElementsByClassName("slide")[outerIndex];
//     outerSlide.style.transform =
//       "translateX(" + (currTransl[outerIndex] + moveOffset * amount) + "px)";
//     outerSlide.style.opacity = "0";
//     currTransl[outerIndex] = currTransl[outerIndex] + moveOffset * amount;
//   }
// }
