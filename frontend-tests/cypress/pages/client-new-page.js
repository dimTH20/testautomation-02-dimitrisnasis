/// <reference types ="cypress" />

//elements
const NAME_FIELD = ":nth-child(1) > input"
const MAIL_FIELD = ":nth-child(2) > input"
const PHONE_FIELD = ":nth-child(3) > input"
const SAVE_BTN = ".blue"

//functions
// creates a new client
function createClient(name, mail, phone, content) {
    cy.get(NAME_FIELD).type(name)
    cy.get(MAIL_FIELD).type(mail)
    cy.get(PHONE_FIELD).type(phone)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}


//export functions/actions
exports.default = {
    createClient
}