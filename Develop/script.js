$(document).ready(function () {
    // click event for save
    $(".saveBtn").on("click", function () {
      var time = $(this).parent().attr("id");
      var input = $(this).siblings(".description").val();
      localStorage.setItem(time, input);
    });
  
    var hour = dayjs().hour();
  
    // adding past/present/future classes to time blocks 
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
  
    // displaying user input from local storage in textarea
    $(".timeblock").each(function () {
      var timeBlock = $(this);
      var id = timeBlock.attr("id");
      timeBlock.children("textarea").val(localStorage.getItem(id));
    });
  
    // displaying the current day and date in the header
    var currentDay = dayjs();
    $("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));
  })