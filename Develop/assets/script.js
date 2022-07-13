var now = moment().format("H A");
var timeNow = moment().format("dddd, MMMM Do");
const nineAM = document.getElementById("nineAM").textContent;
const timeHero = document.getElementById("currentDay");


function printTime() {
    timeHero.textContent = timeNow;
};













printTime()