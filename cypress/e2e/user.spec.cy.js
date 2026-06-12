import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM tests', () => {

  

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
   

    myInfoPage.fillPersonalDetails(chance.first(), 'Middle Name', chance.last())
    myInfoPage.fillEmployeeDetails('6040456', '2024-02-05', '1992-08-06', 'TestField', 'Brazilian', 'Single', 'Male')
    myInfoPage.saveForm()
  })
})
