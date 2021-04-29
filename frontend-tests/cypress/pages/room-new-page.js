/// <reference types ="cypress" />

//elements
const CATEGORY_SELECT = ":nth-child(1) > select"
const NUMBER_FIELD = ":nth-child(2) > input"
const FLOOR_FIELD = ":nth-child(3) > input"
const PRICE_FIELD = ":nth-child(5) > input"
const FEATURES_SELECT = ":nth-child(6) > select"
const SAVE_BTN = ".blue"


//functions
function createRoom(category, number, floor, price, features, confirmationContent) {
    cy.get(CATEGORY_SELECT).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURES_SELECT).select(features)
    cy.get(SAVE_BTN).click()
    cy.contains(confirmationContent)
}


//export functions/actions
exports.default = {
    createRoom
}