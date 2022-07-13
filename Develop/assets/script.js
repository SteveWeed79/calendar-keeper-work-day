var now = moment().format("h A");
var timeNow = moment().format("dddd, MMMM Do");
const nineAM = document.getElementById("nineAM").textContent;
const timeHero = document.getElementById("currentDay");
const textAreaToColor = document.getElementById("nineAMtext")
var timeChange = moment().format("H A");
var testOne = document.getElementsByClassName("input-group-text").textContent;


document.getElementById("buttonContainer").addEventListener("click", function () { alert("Hello") });

function printTime() {
    timeHero.textContent = timeNow;
    console.log(now)
    console.log(testOne)
    document.getElementById("nineAMtext").innerHTML = now;
    //document.getElementsByClassName("test").textContent = now;

    if (nineAM === now) {
        textAreaToColor.setAttribute("class", "present form-control textarea");
    } else if (nineAM <= now) {
        textAreaToColor.setAttribute("class", "past form-control textarea");
    } else {
        textAreaToColor.setAttribute("class", "future form-control textarea");
    }
};

function saveAppointment(event) {

}











printTime()