import CreateUser from '../support/pageObject/createPage.cy.js';

describe('Create User Test', () => {
  const createUser = new CreateUser();

  beforeEach(() => {
    createUser.visitCreate(); // goes to the form page
  });

  it('should create user with fixture data', function () {
    cy.fixture('users.json').then((data) => {
      const user = data.createUsers[0]; // use first user
      createUser.enterFirstName(user.firstName);
      createUser.enterLastName(user.lastName);
      createUser.enterEmail(user.email);
      createUser.enterPassword(user.password);
      createUser.enterConfPassword(user.confirmPass);
      createUser.submit();
      //createUser.SuccValidation();
      createUser.AlreadyCreated();
    });
  });
});
