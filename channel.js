$(document).ready(function() {
  var timeslots=["09 AM","10 AM","11 AM","12 PM","1 PM", "2 PM", "3 PM"];
  var time = $(".time");
  for (var i=0; i<timeslots.length; i++) {
    time.append(
    $("<option>").val(timeslots[i]).text(timeslots[i]));
  }
});