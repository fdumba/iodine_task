Cypress.Commands.add('getCareersIframe', ()=> {
      return cy
      .get('#gnewtonIframe', {timeout: 10000})
      .its('0.contentDocument')
      .its('body').should('not.be.undefined').should('not.be.empty')
        .then(cy.wrap)
})

Cypress.Commands.add('iframeOnload', { prevSubject: 'element' }, $iframe=> {
  return new Cypress.Promise(resolve=> {
      $iframe.on('load', () => {
          resolve($iframe.contents().find('body'));
      });
  });
});