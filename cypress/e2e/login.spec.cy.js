import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
// import MenuPage from '../pages/menuPage'
// import MyInfoPage from '../pages/myInfoPage'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM tests', () => {

  

it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get('input[name="username"]').type(userData.userFail.username)
  cy.get('input[name="password"]').type(userData.userFail.password)
  cy.get('button[type="submit"]').click()
  cy.get('.oxd-alert-content-text')
})

it('Login - Success ', () => {
  cy.visit('/auth/login')
  cy.get('input[name="username"]').type(userData.userSuccess.username)
  cy.get('input[name="password"]').type(userData.userSuccess.password)
  cy.get('button[type="submit"]').click()
  dashboardPage.checkDashboardPage()
})
})