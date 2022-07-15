var now = moment().format("h A");
var timeNow = moment().format("dddd, MMMM Do @ H:MM A");
const timeHero = document.getElementById("currentDay");
const textAreaToColor = document.getElementById("nineAMtext")
var timeChange = moment().format("H A");
var testOne = document.getElementsByClassName("input-group-text").textContent;
var dayPlan = [];


$(document).ready(function () {
    $("button").on("click", function () {
        var value = $(this)
        .siblings('.textarea')
        .val()
        console.log(value)

        var timeId = $(this)
        .siblings('.textarea')
        .attr('id');
        

        console.log("the button worked");
        console.log(value);
        console.log(timeId);
    });
});

function printTime() {
    timeHero.textContent = timeNow;
}


//if ( testOne === now) {
   // textAreaToColor.setAttribute("class", "present form-control textarea");
//} else if ( <= now) {
    //textAreaToColor.setAttribute("class", "past form-control textarea");
//} else {
//    textAreaToColor.setAttribute("class", "future form-control textarea");
//}
//};

//function saveAppointment(event) {









printTime()