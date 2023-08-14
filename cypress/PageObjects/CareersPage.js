class CareersPage {
      //PAGE SELECTORS
    static getPosition(position) {
        return cy.getCareersIframe().contains(position);
    }

    static applyButton() {
        return cy.getCareersIframe().find('[ns-qa="applyBtn"]')
        
    }

    static continueButton() {
        return cy.getCareersIframe().find('[ns-qa="continueBtn"]')
    }

    static getGender(gender) {
        return cy.getCareersIframe().should('be.visible').find(`input#${gender}`)
    }

    static getRace(race) {
        return cy.getCareersIframe().should('be.visible').find(`input#race-${race}`)
    }

    static selectIfVeteran(option) {
        return cy.getCareersIframe().find(`input#${option}`)
    }

    static disabilityStatus(option) {
        return cy.getCareersIframe().find(`input#${option}`)
    }

    static enterYourName(name) {
        return cy.getCareersIframe().find('[ns-qa="yourName"]').type(name)
    }

    static enterTodaysDate() {
        const today = new Date();

        let day = today.getDate();

        day = (day<10) ? `0${day}` : day;

        let month = today.getMonth() + 1;

        month = (month<10) ? `0${month}` : month;

        const year = today.getFullYear();

        return cy.getCareersIframe().find('input[ns-qa="todayDate"]').type(`${year}-${month}-${day}`);
    }
   
    static enterFirstName(firstName) {
        return cy.getCareersIframe().find('#firstName').type(firstName);
    }
    
    static enterLastName(lastName) {
        return cy.getCareersIframe().find('#lastName').type(lastName);
    }

    static enterEmail(email) {
        return cy.getCareersIframe().find('#email').type(email);
    }

    static submitButton() {
        return cy.getCareersIframe().find('[ns-qa="submitBtn"]');
    }

    static validateEmailWarningPopup() {
        cy.getCareersIframe().find('#email')
        .invoke('prop', 'validationMessage')
        .should((text) => {
          expect(text).to.contain("Please include an '@' in the email address");
        });
    }
}

export default CareersPage;