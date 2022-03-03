// GIVEN I am using a daily planner to create a schedule

// WHEN I refresh the page
// THEN the saved events persist

var items = {};

saveButtonEl = document.getElementsByClassName("saveBtn");

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function showDate() {
    var dateEl = $("p")
    dateEl.textContent = moment().format("MMMM Do, YYYY - hh:mm a");
    var dateContainer = document.querySelector("#currentDay");
    //console.log(dateEl.textContent);

    //append dateEl to its parent container, dateContainer
    dateContainer.append(dateEl.textContent);
};

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function auditItems(itemEl) {
        //if the item is in an hour in the past, it's white
        if(moment().isBefore(time)) {
            $(itemEl).addClass("past");
        } else if (moment().isSame(time)) {
        //if the item is in the current hour, it's red
            $(itemEl).addClass("present");
        //if the item is in a future hour, it's green
        } else if (moment().isAfter(time)) {
            $(itemEl).addClass("future");
        }
}

var items = {};

// WHEN I click into a time block
// THEN I can enter an event
//item is entered into the textarea and the button is pressed to save the item
function createItem() {

    var itemToSave = $("li")
    .class(".textarea").value;

    //append itemToSave to its parent container, textarea
    textarea.appendChild(itemToSave);

    for (var i = 0; i < saveButtonEl.length; i++) {
        //add event listener for save button. items should be saved to the container
        saveButtonEl.click(function() {
            console.log("this worked");
        });
    }
};


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//saved user inputs added to localstorage
function saveItem() {
    var dateItem = 
localStorage.setItem("name", JSON.stringify(items));

console.log(savedItems);

    //if there are no saved items, show nothing. if there are saved items, show them in their time blocks
    if (savedItems === 0) {
        savedItems.textContent = "";
    } else {
        localStorage.getItem("name");
    }
}

showDate();
