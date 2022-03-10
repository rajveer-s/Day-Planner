// get the current time 
let currentHour = moment().hour();

// display todays date on top of the page 
function update() {
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do"));
} setInterval(update, 1000);

// change color of the divs by the hour 
function timeBlock() {


    $('.time-block').each(function () {
        let rows = parseInt($(this).attr('id').split('hour')[1]);
        console.log(currentHour, rows);

        if (rows < currentHour) {
            $(this).addClass('past')
        }
        else if (rows === currentHour) {
            $(this).addClass('present')
        }
        else {
            $(this).addClass('future')
        }

    })

}
timeBlock();

// call an on click function on submitBtn adn add the storage of textarea to local storage 