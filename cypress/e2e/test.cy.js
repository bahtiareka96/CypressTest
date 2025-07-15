describe('Open Website', () => {

  it('get into homepage', () => {
    cy.visit('/'); // Uses baseUrl from cypress.config.js
     cy.get('body').should('contain', 'Home Page');
  });

  it('login success', () => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#email').type('aula.lajupeduli@gmail.com');
    cy.get('#pass').type('Auls123!');
    cy.get('#send2').click();
  });

  it('login failed - invalid email', () => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#email').type('auls.lajupeduli@gmail.com'); // wrong email
    cy.get('#pass').type('Auls123!');
    cy.get('#send2').click();
    cy.get('.message.error').should('be.visible')
        .and('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
  });

});
