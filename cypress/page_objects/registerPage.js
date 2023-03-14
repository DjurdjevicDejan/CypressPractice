class RegisterPage {
  get registerNavbarLink() {
    return cy.get(".nav-link").eq(2);
  }

  get firstNameInput() {
    return cy.get("#first-name");
  }

  get lastNameInput() {
    return cy.get("#last-name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get passwordConfirmationInput() {
    return cy.get("#password-confirmation");
  }

  get tcCheckbox() {
    return cy.get(":checkbox");
  }

  get submitButton() {
    return cy.get("button");
  }

  get errorMessage() {
    return cy.get(".alert-danger");
  }

  registerWithValidData(firstName, lastName, email, password) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.passwordConfirmationInput.type(password);
    this.tcCheckbox.check();
    this.submitButton.click();
  }
}

export const registerPage = new RegisterPage();
