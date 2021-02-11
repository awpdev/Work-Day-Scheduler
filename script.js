$( document ).ready(function() {

  // Display day of week and date
  $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMM Do'));

  const workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  const currentHour = parseInt(moment().format('kk')) - workHours.length; // use to color code the time blocks
  
  renderUI();

  // click event handler for save buttons
  $(document).on('click', '.saveBtn', function(event) {
    event.preventDefault(); 
    
    // retrieve text from the text block on the same row
    let hour = $(this).attr("id");
    let note = $(this).siblings(".user-note").val();
    // save to local storage
    if (note) {
      localStorage.setItem(hour, note);
    } 
    textSaved = true;

    renderUI();
  
  });

  function renderUI() {
    $(".container").empty();

    // Dynamically create a row for each work hour
    for (let i = 0; i < workHours.length; i++) {
      let timeSlot = $("<div>").addClass("row");
      timeSlot.attr("id", "row-" + i);
      let timeCol = $("<div>").addClass("col-1 hour");
      let eventCol = $("<textarea>").addClass("col-10");
      eventCol.attr("id", "text-hr" + i);
      eventCol.addClass("user-note");
      if (currentHour > i) {
        eventCol.addClass("past");
      } else if (currentHour < i) {
        eventCol.addClass("future");
      } else {
        eventCol.addClass("current");
      }
      let btnCol = $("<div>").addClass("col-sm-1 saveBtn");
      btnCol.attr("id", "hr" + i);
      timeSlot.attr("time", workHours[i]);
      timeCol.text(timeSlot.attr("time"));
      let saveIcon = $("<i>");
      saveIcon.addClass("far fa-save");

      btnCol.append(saveIcon);
      timeSlot.append(timeCol);
      timeSlot.append(eventCol);
      timeSlot.append(btnCol);
      
      $(".container").append(timeSlot);
      getNotes();
    }
    
    // if (textSaved) console.log(userText);
    console.log("rendered");
  }

  // retrieve user text from local storage
  function getNotes() {
    console.log("getnotes");
    $("#text-hr0").text(localStorage.getItem("hr0"));
    $("#text-hr1").text(localStorage.getItem("hr1"));
    $("#text-hr2").text(localStorage.getItem("hr2"));
    $("#text-hr3").text(localStorage.getItem("hr3"));
    $("#text-hr4").text(localStorage.getItem("hr4"));
    $("#text-hr5").text(localStorage.getItem("hr5"));
    $("#text-hr6").text(localStorage.getItem("hr6"));
    $("#text-hr7").text(localStorage.getItem("hr7"));
    $("#text-hr8").text(localStorage.getItem("hr8"));
  }
});

