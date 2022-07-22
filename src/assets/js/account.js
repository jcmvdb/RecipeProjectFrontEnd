$(document).ready(function() {
  $("#clickBlue").click(function() {
    $("#blueDiv").css('display', "block");
    $("#greenDiv").css("display", "none");
    $("#yellowDiv").css("display", "none");
    $("#redDiv").css("display", "none");
  });
  $("#clickGreen").click(function() {
    $("#blueDiv").css("display", "none");
    $("#greenDiv").css('display', "block");
    $("#yellowDiv").css("display", "none");
    $("#redDiv").css("display", "none");
  });
  $("#clickYellow").click(function() {
    $("#blueDiv").css("display", "none");
    $("#greenDiv").css("display", "none");
    $("#yellowDiv").css('display', "block");
    $("#redDiv").css("display", "none");
  });
  $("#clickRed").click(function() {
    $("#blueDiv").css("display", "none");
    $("#greenDiv").css("display", "none");
    $("#yellowDiv").css('display', "none");
    $("#redDiv").css("display", "block");
  });
});


