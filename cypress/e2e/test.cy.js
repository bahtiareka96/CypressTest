import LoginPage from "../support/pageObject/loginPage.cy";
const loginPage = new LoginPage();

describe('Open Website', () => {

  beforeEach(() => {
    cy.fixture('users').as('loginData');
  });

  it('get into homepage', () => {
    cy.visit('/');
    cy.get('body').should('contain', 'Home Page');
  });

  it('login success', () => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#email').type('aula.lajupeduli@gmail.com');
    cy.get('#pass').type('Auls123!');
    cy.get('#send2').click();
    cy.get('.greet.welcome').should('contain', 'Welcome,');
  });

  it('login via POM', function () {
    loginPage.visit();
    loginPage.enterEmail(this.loginData.validUserLogin.email);
    loginPage.enterPassword(this.loginData.validUserLogin.password);
    loginPage.submit();
    cy.get('.greet.welcome').should('contain', 'Welcome,');
  });

  it('login failed - invalid email', () => {
    cy.visit(Cypress.env('loginUrl'));
    cy.get('#email').type('auls.lajupeduli@gmail.com');
    cy.get('#pass').type('Auls123!');
    cy.get('#send2').click();
    cy.get('.message.error').should('be.visible')
      .and('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
  });

});
