/*--- main_bestSeller가 선택한 카테고리에 맞는 리스트만 보여주게 함----*/

let filter = document.querySelectorAll(".bestSeller_filter"); //ul lists 선택기준
var filter_check = false;
// --------
let filter_list = document.querySelectorAll(".bestSeller_lists .list"); // li lists 선택대상

$(".bestSeller_filters").on("click", ".bestSeller_filter", function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});

if ($(".list").data("id") === "0006") {
  //true
  $(".list").data("id") === "0006";
}
$(".bestSeller_lists")
  .find($(".list").data("id") === "0006")
  .css("diplay", "none");

// filter_list.onClick = (t) => {
//   let filterNumber = t.dataset.id;
//   console.log(filterNumber);
// };

// function getFilter(e) {
//   let filterNumber = this.dataset.id;
//   console.log(filterNumber);
// }

/* 
1. 버튼을 누르면 매개변수 값으로 데이터 값이 전달되는 함수가 실행됨 
2. 리스트의 << DOM. li 
 데이터 아이디에 접근하는 배열을 만들어 매개변수와 동일한지 검사
3. 해당하는 조건의 새로운 배열을 생성 
4. 그 배열을 
*/
