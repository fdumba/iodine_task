class CareersPage {
    //Get Iframe Document from recruiting by paycor
    static getIframeDocument = () => {
        return cy
        .get('#gnewtonIframe', {timeout: 10000})
        .its('0.contentDocument')
      }
      
      //Get IframeBody
      static getIframeBody = () => {
        // get the document
        return this.getIframeDocument()
        // automatically retries until body is loaded
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }


      //PAGE SELECTORS
    static getPosition(position) {
        return this.getIframeBody().contains(position);
    }

    static applyButton() {
        return this.getIframeBody().find('[ns-qa="applyBtn"]')
    }

    static continueButton() {
        return this.getIframeBody().find('[ns-qa="continueBtn"]')
    }

    static getGender(gender) {
        return this.getIframeBody().should('be.visible').find(`input#${gender}`)
    }

    static getRace(race) {
        return this.getIframeBody().should('be.visible').find(`input#race-${race}`)
    }

    static selectIfVeteran(option) {
        return this.getIframeBody().find(`input#${option}`)
    }

    static disabilityStatus(option) {
        return this.getIframeBody().find(`input#${option}`)
    }

    static enterYourName(name) {
        return this.getIframeBody().find('[ns-qa="yourName"]').type(name)
    }

    static enterTodaysDate() {
        const today = new Date();

        let day = today.getDate();

        day = (day<10) ? `0${day}` : day;

        let month = today.getMonth() + 1;

        month = (month<10) ? `0${month}` : month;

        const year = today.getFullYear();

        return this.getIframeBody().find('input[ns-qa="todayDate"]').type(`${year}-${month}-${day}`);
    }
   
    static enterFirstName(firstName) {
        return this.getIframeBody().find('#firstName').type(firstName);
    }
    
    static enterLastName(lastName) {
        return this.getIframeBody().find('#lastName').type(lastName);
    }

    static enterEmail(email) {
        return this.getIframeBody().find('#email').type(email);
    }

    static submitButton() {
        return this.getIframeBody().find('[ns-qa="submitBtn"]');
    }

    static validateEmailWarningPopup() {
        this.getIframeBody().find('#email')
        .invoke('prop', 'validationMessage')
        .should((text) => {
          expect(text).to.contain("Please include an '@' in the email address");
        });
    }
}

export default CareersPage;