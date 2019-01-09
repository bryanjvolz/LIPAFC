var init = {};

$(function () {
  init.yearSelector();
  init.events();
});


init.yearSelector = function(){
  /**
   * yearSelector
   * Toggles to only show the current year
   */
  var currYear = $("#year-select").val();
  $("tr").not("[data-year='"+currYear+"']").hide();
  $("tr[data-year='"+currYear+"']").show();
  return;
};

init.events = function(){
  $("#year-select").on("change",function(){
    init.yearSelector();
  });

  return;
};

