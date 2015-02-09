var leapYear = function(year) {
  if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
    return true;
  }
  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if (year <= 2015) {
      $(".be").text("was");
    } else {
      $(".be").text("shall be")
      if (!result) {
        $("#connery").show();
      }
    }

    if (!result) {
      $(".not").show();
      $(".not").text("not");
    } else {
      $(".not").hide();
      $("#connery").hide();
    }

    $("#result").show();
    event.preventDefault();
  });


});
