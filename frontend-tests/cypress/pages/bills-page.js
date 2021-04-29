/// <reference types ="cypress" />

//elements
const CREATE_BILL_BTN = "h2 > .btn"
const BILLS_LIST = ".bills"
const DOTED_BTN = "img"
const DELETE_BTN = ".menu > :nth-child(2)"
const BACK_BTN = ":nth-child(3) > .btn"


//functions
// clicks on a button that leads to the page that lets the user create a new bill
function viewBillNew(confirmationContent) {
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(confirmationContent)
}

// verifies that the last created bill is on the list.
function verifyLastBill(value) {
    cy.get(BILLS_LIST).last()
    .should("contain", value)
}

// removes last bill from the list
function removeLastBill() {
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
    viewBillNew,
    verifyLastBill, 
    removeLastBill,
    goBackToDashboard
}