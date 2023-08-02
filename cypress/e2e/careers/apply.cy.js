/// <reference types= "cypress" /> 

import careersPage from "../../PageObjects/CareersPage";
import homePage from "../../PageObjects/HomePage";

describe('Apply for position', ()=> {
    it('Navigate to Careers Section', ()=> {
        cy.visit(`${Cypress.env('baseUrl')}/careers-2/`, {timeout: 10000});
        cy.wait(5000);
        cy.get('#gnewtonIframe')
           .should('be.visible')
           //.should('not.be.empty', {timeout: 10000})
           .then(($iframe) => {
               const $body = $iframe.contents().find('body')
      
            cy.wrap($body)
                .contains(`Software Development Engineer in Test`).should('be.visible').click({force: true})  
       })

       cy.get('#gnewtonIframe')
           .should('be.visible')
           //.should('not.be.empty', {timeout: 10000})
           .then(($iframe) => {
               const $body = $iframe.contents().find('body')
      
            cy.wrap($body).find('[ns-qa="applyBtn"]').click();
       })
       
       

        // cy.wrap($body).find('[ns-qa="continueBtn"]')
       cy.pause();
    })

    
   
    
})