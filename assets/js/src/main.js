var init = {};

$(function () {
  init.yearSelector();
  init.events();
  init.carousel();
});


init.yearSelector = function(){
  console.log("trigger");
  /**
   * yearSelector
   * Toggles to only show the current year
   */
  var currYear = $("#year-select").val();
  $("tbody tr").not("[data-year='"+currYear+"']").hide();
  $("tbody tr[data-year='"+currYear+"']").show();
  return;
};

init.events = function(){
  // var yearSelect = document.getElementById("year-select");
  // yearSelect.addEventListener("onchange", init.yearSelector());
  $("#year-select").on("change",function(){
    init.yearSelector();
  });

  return;
};

init.carousel = function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

