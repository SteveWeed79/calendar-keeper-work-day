var now = moment().format("h A");
var timeNow = moment().format("dddd, MMMM Do @ H:MM A");
const timeHero = document.getElementById("currentDay");
const textAreaToColor = document.getElementById("nineAMtext")
var timeChange = moment().format("H A");
var testOne = document.getElementsByClassName("input-group-text").textContent;
var dayPlan = [];
var buttonTrue = false
var localStorageEl = JSON.parse(localStorage.getItem("dayPlan"));


$(document).ready(function () {
    $("button").on("click", function () {
        var value = $(this)
            .siblings('.textarea')
            .val()
        console.log(value)

        buttonTrue = true;

        var timeId = $(this)
            .siblings('.textarea')
            .attr('id');

        dayPlan.push({
            timeId,
            text: value,
            buttonTrue: buttonTrue,
        });

        localStorage.setItem("dayPlan", JSON.stringify(dayPlan));

        console.log("the button worked");
        console.log(value);
        console.log(timeId);
        console.log(dayPlan);
        console.log(localStorageEl);
        console.log(localStorageEl[buttonTrue]);

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