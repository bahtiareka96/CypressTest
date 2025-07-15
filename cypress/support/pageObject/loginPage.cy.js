// support/pageObject/loginPage.cy.js

class LoginPage {
  visit() {
    cy.visit(Cypress.env('loginUrl'));
  }

  enterEmail(email) {
    cy.get('#email').type(email);
  }

  enterPassword(password) {
    cy.get('#pass').type(password);
  }

  submit() {
    cy.get('#send2').click();
  }
}

export default LoginPage;
