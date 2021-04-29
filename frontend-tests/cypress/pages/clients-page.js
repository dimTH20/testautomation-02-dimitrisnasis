/// <reference types ="cypress" />

// elements
const CREATE_CLIENT_BTN = "h2 > .btn"
const CLIENT_LIST = ".client"
const THREE_DOTS_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
const BACK_BTN = ":nth-child(3) > .btn"

//functions
// clicks on a button that leads to the page that lets the user create a new client, and then verifies the content
function viewClientNew(content) {
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(content)
}

// verifies that the last created client is on the list. Built-in to convert to lowercase letters, so when using this, add lowercase letters in the parameters
function verifyLastClient(name, mail, phone) {
    cy.get(CLIENT_LIST).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}

// removes last client from the list
function removeLastClient() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

// goes back to dashboard
function goBackToDashboard(confirmationContent) {
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}


//export functions/actions
exports.default = {
    viewClientNew, 
    verifyLastClient, 
    removeLastClient,
    goBackToDashboard
}