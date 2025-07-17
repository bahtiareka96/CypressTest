import LoginPage from "../support/pageObject/loginPage.cy";
const loginPage = new LoginPage();

describe('Open Website', () => {

  beforeEach(() => {
    cy.fixture('users.json').as('loginData');
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
    loginPage.SuccValidation();
  });

  it('login failed - invalid email', function () {
    loginPage.visit();
    loginPage.enterEmail(this.loginData.invalidUserLogin.email);
    loginPage.enterPassword(this.loginData.invalidUserLogin.password);
    loginPage.submit();
    loginPage.FailValidation();
  });

  it.only('login failed - empty email', function () {
    loginPage.visit();
    loginPage.enterEmail(this.loginData.blankEmail.email);
    loginPage.enterPassword(this.loginData.blankEmail.password);
    loginPage.submit();
    loginPage.NoEmailorPassValidation();
  })

});
