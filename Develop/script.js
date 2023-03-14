$(document).ready(function () {
    // Save button click event
    $(".saveBtn").on("click", function () {
      var time = $(this).parent().attr("id");
      var input = $(this).siblings(".description").val();
      localStorage.setItem(time, input);
    });
  
    var hour = dayjs().hour();
  
    // Add past, present, or future class to each time block
    $(".timeblock").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      if (timeBlock < hour) {
        $(this).addClass("past");
      }
      else if (timeBlock === hour) {
        $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      }
    });
  
    // Get user input from localStorage and set textarea values
    $(".timeblock").each(function () {
      var timeBlock = $(this);
      var id = timeBlock.attr("id");
      timeBlock.children("textarea").val(localStorage.getItem(id));
    });
  
    // Display the current date in the header
    var currentDay = dayjs();
    $("#currentDay").text(currentDay.format("MMM D, YYYY"));
  })