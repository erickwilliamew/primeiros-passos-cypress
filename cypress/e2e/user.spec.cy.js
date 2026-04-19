import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: '[name="password"]',
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
    
   

  }

  it.only('User Info Update - Success', () => {
 
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNametest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNametest')
    cy.get(selectorsList.lastNameField).clear().type('LastNametest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('111111')
    cy.get(selectorsList.genericField).eq(5).clear().type('1234')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
     cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type('1992-06-15')
     cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('TesteIField')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
    
    
  })


it('Login - Fail', () => {
  
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})