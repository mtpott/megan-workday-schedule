// GIVEN I am using a daily planner to create a schedule

// WHEN I refresh the page
// THEN the saved events persist

var dateEl = $("p")

//empty JS object
var savedItems = {};

var itemToSave = $("div");
var itemEl = itemToSave.val();
var textAreaEl = $(".textarea").value;

//saveButtonEl = document.getElementsByClassName("saveBtn");

saveButton8El = document.getElementById("saveBtn-8AM");
saveButton9El = document.getElementById("saveBtn-9AM");

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function showDate() {
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

//when i click the corresponding save button, the textbox will
//display the corresponding textarea value and save it
//to localStorage
    // var itemContent2; 

    //this shows what is typed in the textarea at 8AM but no others!
    var itemContent = $(".textarea").text();

    // for (var i = 0; i < itemContent.length; i++) {
    //     if (itemContent === saveButtonEl) {
    //         console.log("this savebutton works");
    //     }
    // }

    // var itemContent = $(".textarea").each(function() {
    //     if (itemToSave.select()) {
    //         itemContent2 = $(this).val();
    //         //$(x.target).html(x);
    //     };
    // });
    JSON.stringify(localStorage.setItem("item", itemContent));

    //this console.log gets me every single textarea element
    //find the value inside of the element?
    console.log(itemContent.value);
    //console.log($(".textarea"));

    //this is blank
    console.log(localStorage.getItem("item"));

    //this is undefined
    //console.log(itemEl.value);

//find the text content of itemEl in order to show it in the console
//showing up as blank/undefined, because there's nothing in it

    saveItem();
    auditItems();
};

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function auditItems(itemToSave) {
    var date = $(dateEl).find("p").text().trim();
    var time = moment(date, "L").set("hour", 08);

        //if the item is in an hour in the past, it's white
        if(moment().isBefore(time)) {
            $(itemToSave).addClass("list-group-item-light");
            console.log("it's early");
        } else if (moment().isSame(time)) {
        //if the item is in the current hour, it's red
            $(itemToSave).addClass("list-group-item-danger");
            console.log("it's happening");
        //if the item is in a future hour, it's green
        } else if (moment().isAfter(time)) {
            $(itemToSave).addClass("list-group-item-success");
            console.log("it's after");
        }
}

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

//saved user inputs added to localstorage
function saveItem() {
    localStorage.setItem("item", JSON.stringify(itemEl));

    //console.log(localStorage.getItem("item"));

    //if there are no saved items, show nothing
    //if there are saved items, show them in their time blocks
    if (!savedItems) {
        savedItems.textContent = "";
    } else {
        showItem();
    }
};

function showItem(savedItems) {

    savedItems = localStorage.getItem("item");
    //item = JSON.parse(localStorage.getItem("item"));
    //console.log("showItem function");

    //append item to parent container, textAreaEl
    itemToSave.append(textAreaEl);
    //console.log(savedItems);
}

showDate();

// for (var i = 0; i < saveButtonEl.length; i++) {
//     //add event listener for save button. items should be saved to the container
//     saveButtonEl[i].onclick = function() {
//         //console.log("button clicked");
//         createItem();
//     };
// };
//console.log(saveButtonEl);

saveButton8El.onclick = function() {
    createItem();
}

saveButton9El.onclick = function() {
    createItem();
}