/// <reference types= "cypress" /> 
import careersPage from "../../PageObjects/CareersPage";

describe('Apply for position', ()=> {
    it('Apply for a position', ()=> {
        cy.visit(`${Cypress.env('baseUrl')}/careers-2/`, {timeout: 10000});

        //Get SDET from Current Job Openings
        careersPage.getPosition(`Software Development Engineer in Test`).should('be.visible').click({force: true});
        
        cy.wait(2000); 
        
        //Click on Apply button
        careersPage.applyButton().click();
        
        cy.wait(2000);

        //Click on Continue button
        careersPage.continueButton().click();

        cy.wait(2000);

        //Select Gender and Race
        careersPage.getGender('male').click();
        careersPage.getRace(2).click();

        //Click on Continue button
        careersPage.continueButton().click();

        cy.wait(2000);


        //Invitation to Self-Identify Protected Veteran Status
        careersPage.selectIfVeteran('not-identify').click();
        careersPage.continueButton().click();

        cy.wait(2000);

        //Voluntary Self-Identification of Disability
        careersPage.disabilityStatus('not_disability').click();
        careersPage.enterYourName("Eziz Rejepov");
        careersPage.enterTodaysDate();
        careersPage.continueButton().click();
        
        cy.wait(2000);

        //Application Final Page
        //Enter first name and last name fields
        careersPage.enterFirstName("Eziz");
        careersPage.enterLastName("Rejepov");
        careersPage.enterEmail("test");
        careersPage.submitButton().click()

        careersPage.validateEmailWarningPopup();
        
    })
})