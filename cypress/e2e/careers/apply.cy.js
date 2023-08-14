/// <reference types= "cypress" /> 
import careersPage from "../../PageObjects/CareersPage";

describe('Apply for position', ()=> {
    it('Apply for a position', ()=> {
        cy.visit(`${Cypress.env('baseUrl')}/careers-2/`, {timeout: 10000});

        cy.fixture('applicant').then(applicantData => {
            //Get SDET from Current Job Openings
            careersPage.getPosition(applicantData.position).should('be.visible').click({force: true});
            
            cy.wait(2000); 
            
            //Click on Apply button
            careersPage.applyButton().should('be.visible').click({force: true});
            
            cy.wait(2000);

            //Click on Continue button
            careersPage.continueButton().click({force: true});

            cy.wait(2000);

            //Select Gender and Race
            careersPage.getGender(applicantData.gender).click();
            careersPage.getRace(applicantData.race).click();

            //Click on Continue button
            careersPage.continueButton().click();

            cy.wait(2000);


            //Invitation to Self-Identify Protected Veteran Status
            careersPage.selectIfVeteran(applicantData.veteranStatus).click();
            careersPage.continueButton().click();

            cy.wait(2000);

            //Voluntary Self-Identification of Disability
            careersPage.disabilityStatus(applicantData.disabilityStatus).click();
            careersPage.enterYourName("Eziz Rejepov");
            careersPage.enterTodaysDate();
            careersPage.continueButton().click();
            
            cy.wait(2000);

            //Application Final Page
            //Enter first name and last name fields
            careersPage.enterFirstName(applicantData.firstName);
            careersPage.enterLastName(applicantData.lastName);
            careersPage.enterEmail(applicantData.email);
            careersPage.submitButton().click()

            careersPage.validateEmailWarningPopup();
        })
        
        
    })
})