class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            dropdown: ".oxd-select-text",
            dropdownOptions: ".oxd-select-dropdown",
            genderMale: ".oxd-radio-wrapper:contains('Male') label",
            genderFemale: ".oxd-radio-wrapper:contains('Female') label"
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(DriversLicenseNumber, LicenseExpiryDate, DateOfBirth, TestField, nationality, maritalStatus, gender) {
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicenseNumber)// CNH
        cy.get(this.selectorsList().genericField).eq(6).clear({force: true}).type(LicenseExpiryDate + '{enter}') 
        // Data de Expiração /{force: true} para ignorar o bloqueio do calendário
        cy.get(this.selectorsList().genericField).eq(7).clear({force: true}).type(DateOfBirth + '{enter}')
         // Data de Nascimento
        cy.get(this.selectorsList().genericField).eq(8).clear({force: true}).type(TestField)
        cy.get(this.selectorsList().dropdown).eq(0).click()
        cy.get(this.selectorsList().dropdownOptions).should('be.visible').contains(nationality).click()
         // Seleção de Nacionalidade
        cy.get(this.selectorsList().dropdown).eq(1).click()   
        cy.get(this.selectorsList().dropdownOptions).contains(maritalStatus).click()
         // Seleção de Estado Civil
        cy.get(this.selectorsList().dropdownOptions).should('not.exist')
        if(gender === 'Male') {
            cy.get(this.selectorsList().genderMale).click()
        } else if(gender === 'Female') {
            cy.get(this.selectorsList().genderFemale).click()
        }
    }

    saveForm() {
       
        cy.get(this.selectorsList().submitButton).first().click({ force: true })
         // Clica no botão de salvar garantindo a interação mesmo com sobreposição
    }
}

export default MyInfoPage
