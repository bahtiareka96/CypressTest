
class LoginPage {
  visitLogin() {
    cy.visit(Cypress.env('loginUrl'));
  }

enterEmail(email) {
  if (email === null || email === undefined) {
    throw new Error('Email cannot be null or undefined');
  }
  const input = cy.get('#email');
  if (email === '') {
    input.clear();
  } else {
    input.type(email);
  }
  return input; // allows chaining if needed
}

enterPassword(password) {
  if (password === null || password === undefined) {
    throw new Error('Password cannot be null or undefined')
  }
  const input = cy.get('#pass');
  if (password === '') {
    input.clear();
  } else {
    input.type(password);
  }
  return input;
}

  submit() {
    cy.get('#send2').click();
  }

  SuccValidation() {
     cy.get('.base').should('be.visible').and('contain', 'My Account');
  }

  FailValidation() {
    cy.get('.message.error').should('be.visible')
      .and('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
  }

  EmailError() {
    cy.get('#email-error').should('be.visible')
      .and('contain', 'This is a required field.')
  }

  PassError() {
    cy.get('#pass-error').should('be.visible')
      .and('contain', 'This is a required field.')
  }
}


export default LoginPage;
