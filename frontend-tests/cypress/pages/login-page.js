/// <reference types ="cypress" />

// Elements
const HEADER = "h2"
const USERNAME_FIELD = ":nth-child(1) > input"
const PASSWORD_FIELD = ":nth-child(2) > input"
const LOGIN_BTN = ".btn"
const ERROR_LABEL = ".error"

// Functions

//will confirm the header
function confirmTheHeader(confirmationContent) {
    cy.get(HEADER).should("contain", confirmationContent)
}

// will login the user with username and password. 
function doLogin(username, password, confirmationContent) {
    cy.get(USERNAME_FIELD).type(username)  // typing in correct username
    cy.get(PASSWORD_FIELD).type(password)  // typing in correct password
    cy.get(LOGIN_BTN).click()
    cy.wait(1000)
    cy.contains(confirmationContent)
    
}

function doInvalidLogin(username, password) {
    cy.get(USERNAME_FIELD).type(username)  // the username doesn't exist in database, it's typed in on purpose
    cy.get(PASSWORD_FIELD).type(password) // the password doesn't exist in database, it's typed in on purpose
    cy.get(LOGIN_BTN).click()
    cy.wait(1000)
    cy.get(ERROR_LABEL).should("contain", "Bad username or password")  // error message is displayed if login details are wrong
    
}


//export functions/actions
exports.default = {
    confirmTheHeader,
    doLogin,
    doInvalidLogin
}