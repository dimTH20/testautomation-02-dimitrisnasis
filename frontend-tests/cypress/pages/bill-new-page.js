/// <reference types ="cypress" />

//elements
const VALUE_FIELD = "input"
const SAVE_BTN = ".blue"


//functions
function createBill(value, confirmationContent) {
    cy.get(VALUE_FIELD).type(value)
    cy.get(SAVE_BTN).click()
    cy.contains(confirmationContent)
}


//export functions/actions
exports.default = {
    createBill
}