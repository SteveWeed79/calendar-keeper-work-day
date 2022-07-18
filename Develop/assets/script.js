var now = moment().format("H");
var timeNow = moment().format("dddd, MMMM Do @ H:MM A");
const timeHero = document.getElementById("currentDay");



document.addEventListener('click', function (e) {})
  


$(document).ready(function () {
    $("button").on("click", function () {
        var value = $(this)
            .siblings('.textarea')
            .val()


        var timeId = $(this)
            .siblings('.textarea')
            .attr('id');

        localStorage.setItem(timeId, value);
    });
});


$("#hour-9").val(localStorage.getItem("hour-9")); 
$("#hour-10").val(localStorage.getItem("hour-10")); 
$("#hour-11").val(localStorage.getItem("hour-11")); 
$("#hour-12").val(localStorage.getItem("hour-12")); 
$("#hour-13").val(localStorage.getItem("hour-13")); 
$("#hour-14").val(localStorage.getItem("hour-14")); 
$("#hour-15").val(localStorage.getItem("hour-15")); 
$("#hour-16").val(localStorage.getItem("hour-16")); 
$("#hour-17").val(localStorage.getItem("hour-17")); 


function printTime() {
    timeHero.textContent = timeNow;
    let testEl = localStorage.getItem("dayPlan");
    let obj = JSON.parse(testEl);
   

    $(".form-control").each(function () {
        let hourId = $(this).attr("id");
        let hour = parseInt(hourId.split("-")[1]);

        if (hour == now) {
            $(this).addClass("present")
        } else if (hour >= now) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }
    });
};



printTime()