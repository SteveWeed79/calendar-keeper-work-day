var now = moment().format("h A");
var timeNow = moment().format("dddd, MMMM Do @ H:MM A");
const timeHero = document.getElementById("currentDay");
const textAreaToColor = document.getElementById("nineAMtext")
var timeChange = moment().format("H A");
var testOne = document.getElementsByClassName("input-group-text").textContent;
var dayPlan = [];
var localStorageEl = JSON.parse(localStorage.getItem("dayPlan"));



document.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
        alert('BUTTON CLICKED');
        this.getElementById('hour-9').textContent = localStorageEl[1]
    }
})



$(document).ready(function () {
    $("button").on("click", function () {
        var value = $(this)
            .siblings('.textarea')
            .val()
        console.log(value)



        var timeId = $(this)
            .siblings('.textarea')
            .attr('id');

        dayPlan.push({
            timeId,
            textEl: value,

        });

        localStorage.setItem("dayPlan", JSON.stringify(dayPlan));



        console.log("the button worked");
        console.log(value);
        console.log(timeId);
        console.log(dayPlan);
        console.log(localStorageEl[1]);


    });
});



function printTime() {
    timeHero.textContent = timeNow;
    let testEl = localStorage.getItem("dayPlan");
    let obj = JSON.parse(testEl);
    document.getElementById('hour-9').textContent = obj.textEl;
    console.log(timeChange);

    $("#nineAM,#tenAM,#elevenAm,#twelvePM,#onePM,#twoPM,#threePM,#fourPM,#fivePM").each(function () {
        if (this == now) {
            document.getElementsByClassName(textarea).setAttribute("class", "present");
        } else if (this >= now) {
            document.getElementsByClassName(textarea).setAttribute("class", "future");
        } else {
            document.getElementsByClassName(textarea).setAttribute("class", "past");
        }
        //$("#hour-9 .description").val(localStorage.getItem("hour-9", "text"));

    });

};


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