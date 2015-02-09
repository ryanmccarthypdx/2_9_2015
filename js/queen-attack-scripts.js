var queenAttack = function(queenPosition, pawnPosition) {

  if ((queenPosition[0] === pawnPosition[0]) || (queenPosition[1] === pawnPosition[1])) {
    return true;
  } else if (Math.abs(queenPosition[0] - pawnPosition[0]) === Math.abs(queenPosition[1] - pawnPosition[1])) {
    return true;
  }  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {
    var queenx = parseInt($("input#queen-x").val());
    var queeny = parseInt($("input#queen-y").val());
    var pawnx = parseInt($("input#pawn-x").val());
    var pawny = parseInt($("input#pawn-y").val());

    var result = queenAttack([queenx, queeny], [pawnx, pawny]);

    if (!result) {
      $(".not").show();
      $(".not").text("NOT");
    } else {
      $(".not").hide();
    }

    $("#result").show();
    event.preventDefault();
  });
});
