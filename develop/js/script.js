// get the current time 
let currentHour = moment().hour();

// display todays date on top of the page 
function update() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do"));
} setInterval(update, 1000);
