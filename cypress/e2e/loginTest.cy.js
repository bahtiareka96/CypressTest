import LoginPage from "../support/pageObject/loginPage.cy.js";
const loginPage = new LoginPage();

describe('Login Test', () => {

  beforeEach(() => {
    cy.fixture('users.json').as('loginData');
  });

  it('login success', function () {
    loginPage.visitLogin();
    loginPage.enterEmail(this.loginData.validUserLogin.email);
    loginPage.enterPassword(this.loginData.validUserLogin.password);
    loginPage.submit();
    loginPage.SuccValidation();
  });

  it('login failed - invalid email', function () {
    loginPage.visitLogin();
    loginPage.enterEmail(this.loginData.invalidUserLogin.email);
    loginPage.enterPassword(this.loginData.invalidUserLogin.password);
    loginPage.submit();
    loginPage.FailValidation();
  });

  it('login failed - empty email', function () {
    loginPage.visitLogin();
    loginPage.enterEmail(this.loginData.blankEmail.email);
    loginPage.enterPassword(this.loginData.blankEmail.password);
    loginPage.submit();
    loginPage.EmailError();
  })
  it('login failed - empty password', function () {
    loginPage.visitLogin();
    loginPage.enterEmail(this.loginData.blankPassword.email);
    loginPage.enterPassword(this.loginData.blankPassword.password);
    loginPage.submit();
    loginPage.PassError();
  });
});
