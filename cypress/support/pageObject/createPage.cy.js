class CreateUser {
    visitCreate() {
        cy.visit(Cypress.env('createUser'));
    }

    enterFirstName(firstName) {
        cy.get('#firstname').type(firstName); // ✅ correct
    }

    enterLastName(lastName) {
        cy.get('#lastname').type(lastName); // ✅ add this line, assuming #lastName is the correct selector
    }

    enterEmail(email) {
        const input = cy.get('#email_address');
        if (!email) {
            input.clear();
        } else {
            input.type(email);
        }
        return input;
    }

    enterPassword(password = '') {
        const input = cy.get('#password');
        if (password === '') {
            input.clear();
        } else {
            input.type(password);
        }
        return input;
    }


    enterConfPassword(confirmPass = '') {
        const input = cy.get('#password-confirmation');
        if (confirmPass === '') {
            input.clear();
        } else {
            input.type(confirmPass);
        }
        return input;
    }


    submit() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    }

    SuccValidation(){
        cy.get('.message-success').should('be.visible').and('contain', 'Thank you for registering with Main Website Store.')
    }

    AlreadyCreated(){
        cy.get('.message-error').should('be.visible').and('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }

}

export default CreateUser;
