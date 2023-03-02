// displaying current day and the date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

//Adding click event on saveBtn 
$(document).ready(function () {
 $(".saveBtn").on('click', function () {

let text = $(this).siblings(".description").val();
let time = $(this).parent().attr("id");

// Saving items in local storage
localStorage.setItem(time, text); 
    })
function timeTracker() {
let currentTime = moment().hour();
console.log(currentTime);

 // loop over time blocks
$(".description").each(function (calender) {
        
 // styling backgroundcolors in accordance to time
if (currentTime > calender + 9) {
$(currentTime).addClass('past');
}
if (currentTime == calender + 9) {

$(currentTime).addClass('present');
}
if (currentTime > calender + 9) {

$(this).addClass('future');
}

})
    };
 // retrieve items from local storage 

$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("16 .description").val(localStorage.getItem("16"));
$("17 .description").val(localStorage.getItem("17"));

timeTracker();

})