$(document).ready(function() {
  var timeslots=["09 AM","10 AM","11 AM","12 PM","1 PM", "2 PM", "3 PM"];
  var time = $(".time");
  for (var i=0; i<timeslots.length; i++) {
    time.append(
    $("<option>").val(timeslots[i]).text(timeslots[i]));
  }
});

function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");
  var table = document.createElement('TABLE');
  table.border ='1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i=0; i<3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j=0; j<7; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j))
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}

addTable();