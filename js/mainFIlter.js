/*--- main_bestSeller가 선택한 카테고리에 맞는 리스트만 보여주게 함----*/

let filter = document.querySelectorAll(".bestSeller_filter"); //ul lists 선택기준
var filter_check = false;

var best_list = $(".bestSeller .bestSeller_lists .list");

$(".bestSeller_filters").on("click", ".bestSeller_filter", function () {
  $(this).siblings().removeClass("active");
  console.log("filterColor");
  $(this).addClass("active");

  //get category datai-id
  let filterNum = $(this).data("id");
  console.log(filterNum);
  best_list
    .hide()
    .filter(function () {
      return $(this).data("id") === filterNum;
    })
    .show();

  function init(filterNum) {
    let first_filterButton = document.querySelector(".bestSeller_filters")
      .firstChild;
    console.log("filter_init_done");
    console.log(first_filterButton.classList);
    showCategoryName(filterNum);
  }

  init("0001");

  function showCategoryName(filterNum) {
    switch (filterNum) {
      case "0001":
        $(".bestSeller_togo").html("건강반찬");
        break;
      case "0002":
        $(".bestSeller_togo").html("밥/국");
        break;
      case "0003":
        $(".bestSeller_togo").html("샐러드");
        break;
      case "0004":
        $(".bestSeller_togo").html("죽/스프");
        break;
      case "0005":
        $(".bestSeller_togo").html("소스/양념");
        break;
      case "0006":
        $(".bestSeller_togo").html("베이커리");
        break;
      case "0007":
        $(".bestSeller_togo").html("건강음료");
        break;
      case "0008":
        $(".bestSeller_togo").html("간편식/간식");
        break;
      case "0009":
        $(".bestSeller_togo").html("연화식");
        break;
      case "0010":
        $(".bestSeller_togo").html("1Table");
        break;
      case "0011":
        $(".bestSeller_togo").html("비건/라이프");
        break;
      case "0012":
        $(".bestSeller_togo").html("스페셜패키지");
        break;
    }
  }
});
