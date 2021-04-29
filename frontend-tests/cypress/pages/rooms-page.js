/// <reference types ="cypress" />

//elements
const CREATE_ROOM_BTN = "h2 > .btn"
const ROOMS_LIST = ".rooms"
const DOTED_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
const BACK_BTN = ":nth-child(3) > .btn"


//functions
// clicks on a button that leads to the page that lets the user create a new room
function viewRoomNew(confirmationContent) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(confirmationContent)
}

// verifies that the last created room is on the list. Built-in to convert to lowercase letters, so when using this, add lowercase letters in the parameters
function verifyLastRoom(category, number, floor, price, features) {
    cy.get(ROOMS_LIST).last()
    .should("contain", category)
    .and("contain", number)
    .and("contain", floor)
    .and("contain", price)
    .and("contain", features)
}

// removes last room from the list
function removeLastRoom() {
    cy.get(DOTED_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

// goes back to dashboard
function goBackToDashboard(confirmationContent) {
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}


//export functions/actions
exports.default = {
    viewRoomNew,
    verifyLastRoom, 
    removeLastRoom,
    goBackToDashboard
}