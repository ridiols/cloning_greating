let depth1 = document.querySelector(".depth1");
let depth2 = document.querySelector(".depth2");
let header_account = document.querySelectorAll(".userAccount > ul > li");
let header_account_last = header_account[3];
let header_account_2depth = document.querySelector(".userAccount_depth2");

depth1.addEventListener("mouseover", function (e) {
  depth2.classList.add("active");
});

depth2.addEventListener("mouseleave", function (e) {
  depth2.classList.remove("active");
});

header_account_last.addEventListener("mouseover", function (e) {
  header_account_2depth.classList.add("active");
});

header_account_last.addEventListener("mouseleave", function (e) {
  header_account_2depth.classList.remove("active");
});
