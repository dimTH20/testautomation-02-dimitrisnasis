/// <reference types ="cypress" />

//imports
import * as targets from "../targets/targets"
import * as loginPage from "../pages/login-page"
import * as dashboardPage from "../pages/dashboard-page"
import * as clientsPage from "../pages/clients-page"
import * as clientNewPage from "../pages/client-new-page"
import * as roomsPage from "../pages/rooms-page"
import * as roomNewPage from "../pages/room-new-page"
import * as billsPage from "../pages/bills-page"
import * as billNewPage from "../pages/bill-new-page"
import * as reservationsPage from "../pages/reservations-page"


// this is the test suite
describe("Testsuite with PO", () => {

    // setting up test
    beforeEach( () => {
        dashboardPage.doLogout()  // this will check if user is loged in, and if so, user gets loged out. checks also that the header contains 'Login'
        cy.log("Checks if user is loged in, in that case a logout will be performed")

        cy.visit(targets.base_url)
        cy.log("Visiting Login page")
        
        cy.contains("Login")
        cy.log("Header confirmed")

        loginPage.doLogin(targets.username, targets.password, "Tester Hotel Overview")
        cy.log("Login at beforeEach, header at dashboard confirmed")
    });


    // this test case will perform an invalid login
    it("Invalid login", () => {
        dashboardPage.doLogout()  // needs to log out first before doing the invalid login attempt because login is happening in beforeEach
        cy.log("Logout performed")
        loginPage.confirmTheHeader("Login")
        cy.log("Header Login confirmed")

        loginPage.doInvalidLogin("aaa", "aaa")
        cy.log("Invalid login performed")
        loginPage.confirmTheHeader("Login")
        cy.log("Header Login confirmed")

        cy.wait(4000).percySnapshot('SCREENSHOT_invalid_login')
    });

    // this test case will perform a valid login and logout
   it("Valid login and logout", () => {
        dashboardPage.doLogout() // needs to logout first because login is happening in beforeEach
        cy.log("logout performed")
        loginPage.confirmTheHeader("Login")
        cy.log("Header Login confirmed")

        loginPage.doLogin(targets.username, targets.password, "Tester Hotel Overview")
        cy.log("Valid login performed, header confirmed")
        dashboardPage.doLogout()
        cy.log("Valid logout performed")
        loginPage.confirmTheHeader("Login")
        cy.log("Header Login confirmed")
    });

    // this test case will navigate to the 4 main pages
    it("Navigate to the 4 main pages and verify", () => {
        //navigate to Rooms page and then go back to dashboard
        dashboardPage.viewRooms("Rooms")
        cy.log("View rooms button was clicked, content confirmed")
        roomsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")

        cy.wait(4000).percySnapshot('SCREENSHOT_navigate_to_rooms_page')

        //navigate to Clients page and then go back to dashboard
        dashboardPage.viewClients("Clients")
        cy.log("View clients button was clicked, content confirmed")
        clientsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")

        //navigate to Bills page and then go back to dashboard
        dashboardPage.viewBills("Bills")
        cy.log("View bills button was clicked, content confirmed")
        billsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")

        //navigate to Reservations page and then go back to dashboard
        dashboardPage.viewReservations("Reservations")
        cy.log("View reservations button was clicked, content confirmed")
        reservationsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")
    })

    // this test case will view, create, delete a room and verify created room
    it("View, create, delete rooms and verify", () => {
        dashboardPage.viewRooms("Rooms")
        cy.log("View rooms button was clicked, content confirmed")

        cy.wait(4000).percySnapshot('SCREENSHOT_view_rooms')

        roomsPage.viewRoomNew("New Room")
        cy.log("Create Room button was clicked, content confirmed")

        roomNewPage.createRoom(
            targets.globalCreateRoomCat, 
            targets.globalCreateRoomNum, 
            targets.globalCreateRoomFloor, 
            targets.globalCreateRoomPrice, 
            targets.globalCreateRoomFeat, 
            targets.globalCreateRoomConfCont) //parameters: category, number, floor, price, features, confirmationContent
        cy.log("Save button was clicked, content confirmed")

        roomsPage.verifyLastRoom(
            targets.globalVerifyLastRoomCat, 
            targets.globalVerifyLastRoomNum, 
            targets.globalVerifyLastRoomFloor, 
            targets.globalVerifyLastRoomPrice, 
            targets.globalVerifyLastRoomFeat)
        cy.log("Veryfying last room created")

        roomsPage.removeLastRoom()
        cy.log("Removed last room from the list")

        roomsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")
    })

    // this test case will view, create, delete a client and verify created client
    it("View, create, delete clients and verify", () => {
        dashboardPage.viewClients("Clients")
        cy.log("View clients button was clicked, content confirmed")

        clientsPage.viewClientNew("New Client")
        cy.log("Create Client button was clicked, content confirmed")

        clientNewPage.createClient(
            targets.globalFakerRndName, 
            targets.globalFakerRndMail, 
            targets.globalFakerRndPhone, "Clients")
        cy.log("Save button was clicked, content confirmed")
        
        clientsPage.verifyLastClient(
            targets.globalFakerRndName, 
            targets.globalFakerRndMail, 
            targets.globalFakerRndPhone)
        cy.log("Veryfying last client created")

        clientsPage.removeLastClient()
        cy.log("Removed last client from the list")

        clientsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")
    })

    // this test case will view, create, delete a bill and verify created bill
    it("View, create, delete bills and verify", () => {
        dashboardPage.viewBills("Bills")
        cy.log("View bills button was clicked, content confirmed")

        billsPage.viewBillNew("New Bill")
        cy.log("Create Bill button was clicked, content confirmed")

        billNewPage.createBill(targets.globalFakerRndPrice, "Bills")
        cy.log("Save button was clicked, content confirmed")
        
        billsPage.verifyLastBill(targets.globalFakerRndPrice)
        cy.log("Veryfying last bill created")

        billsPage.removeLastBill()
        cy.log("Removed last bill from the list")

        billsPage.goBackToDashboard("Tester Hotel Overview")
        cy.log("Back button was clicked, content confirmed")
    })

});