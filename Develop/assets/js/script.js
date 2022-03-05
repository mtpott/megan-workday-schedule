// GIVEN I am using a daily planner to create a schedule

// WHEN I refresh the page
// THEN the saved events persist


//empty JS object
var savedItems = {};

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

// WHEN I click into a time block
// THEN I can enter an event
//item is entered into the textarea and the button is pressed to save the item
function createItem() {

    var itemToSave = $("div").val();
    var textAreaEl = $("textarea");

    //append itemToSave to its parent container, textarea
    textAreaEl.append(itemToSave);

    console.log("createItem function");

    saveItem();
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

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//saved user inputs added to localstorage
function saveItem() {
    localStorage.setItem("item", JSON.stringify(savedItems));

    console.log(localStorage.getItem("item"));

    //if there are no saved items, show nothing. if there are saved items, show them in their time blocks
    if (!savedItems) {
        savedItems.textContent = "";
    } else {
        showItem();
    }
}

function showItem(item) {
    item = JSON.parse(localStorage.getItem("name"));
}

showDate();

for (var i = 0; i < saveButtonEl.length; i++) {
    //add event listener for save button. items should be saved to the container
    saveButtonEl[i].onclick = function() {
        //console.log("this worked");
        createItem();
    };
};
console.log(saveButtonEl);
// //when i click the save button, createItem should run
// saveButtonEl.onclick = function() {
//     createItem()
// };