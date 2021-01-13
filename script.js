$( document ).ready(function() {

  // Display which day of week and date
  $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMM Do'));

  let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  // let userText = ["", "", "", "", "", "", "", "", ""];
  let currentHour = parseInt(moment().format('kk'));

  // Dynamically create a row for each work hour
  for (let i = 0; i < workHours.length; i++) {
    let timeSlot = $("<div>").addClass("row");
    timeSlot.attr("id", "row-" + i);
    let timeCol = $("<div>").addClass("col-sm-1 hour");
    let eventCol = $("<textarea>").addClass("col-sm-10");
    if (currentHour > i + 9) {
      eventCol.addClass("past");
    } else if (currentHour < i + 9) {
      eventCol.addClass("future");
    } else {
      eventCol.addClass("current");
    }
    let btnCol = $("<div>").addClass("col-sm-1 saveBtn");
    timeSlot.attr("time", workHours[i]);
    timeCol.text(timeSlot.attr("time"));
    let saveIcon = $("<i>");
    saveIcon.addClass("far fa-save");

    btnCol.append(saveIcon);
    timeSlot.append(timeCol);
    timeSlot.append(eventCol);
    timeSlot.append(btnCol);
    
    $(".container").append(timeSlot);

  }

  $(".saveBtn").on("click", function() {

    if (typeof(Storage) !== "undefined") {
      
    } else {
      alert("Sorry, your browser does not support web storage.");
    }
  
  });

});
