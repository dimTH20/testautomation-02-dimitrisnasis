/// <reference types ="cypress" />

// Elements
const LOGOUT_BTN = ".user > .btn"
const VIEW_ROOMS_BTN = ":nth-child(1) > .btn"
const VIEW_CLIENTS_BTN = ".blocks > :nth-child(2) > .btn"
const VIEW_BILLS_BTN = ".blocks > :nth-child(3) > .btn"
const VIEW_RESERVATIONS_BTN = ".blocks > :nth-child(4) > .btn"

//functions/actions
//checks if user is loged in, and if so, user gets loged out
function doLogout() {
    cy.get("body").then(($body) => {
        if ($body.text().includes("Welcome tester01")) {
            cy.get(LOGOUT_BTN).click()
            cy.wait(1000)
        }
    })
}

//views rooms page
function viewRooms(confirmationContent) {
    cy.get(VIEW_ROOMS_BTN).click()
    cy.contains(confirmationContent)
}

//views clients page
function viewClients(confirmationContent) {
    cy.get(VIEW_CLIENTS_BTN).click()
    cy.contains(confirmationContent)
}

//views bills page
function viewBills(confirmationContent) {
    cy.get(VIEW_BILLS_BTN).click()
    cy.contains(confirmationContent)
}

//views reservations page
function viewReservations(confirmationContent) {
    cy.get(VIEW_RESERVATIONS_BTN).click()
    cy.contains(confirmationContent)
}

//export functions/actions
exports.default = {
    doLogout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations
}