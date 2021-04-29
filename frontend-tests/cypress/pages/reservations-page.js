/// <reference types ="cypress" />

//elements
const BACK_BTN = ":nth-child(3) > .btn"

//functions
// goes back to dashboard
function goBackToDashboard(confirmationContent) {
    cy.get(BACK_BTN).click()
    cy.contains(confirmationContent)
}

//export functions/actions
exports.default = {
    goBackToDashboard
}