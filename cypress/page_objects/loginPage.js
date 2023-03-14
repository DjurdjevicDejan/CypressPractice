class LoginPage {
  get loginLink() {
    return cy.get(".nav-link").eq(1);
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get submitButton() {
    return cy.get("button");
  }

  get errorMessage() {
    return cy.get(".alert-danger");
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
  }
}

export const loginPage = new LoginPage();
