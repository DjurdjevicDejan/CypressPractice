/// reference types="Cypress" />
const locators = require("../fixtures/locators.json");
import { faker } from "@faker-js/faker";

describe("register tests with locators", () => {
  const userData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8, true) + 1,
    randomPasswordWithoutNumber: faker.internet.password(
      8,
      true,
      "^[a-zA-Z_]*$"
    ),
    randomShortPassword: faker.internet.password(2),
    randomEmailWithoutMonkey: faker.internet.email().replace("@", ""),
  };

  beforeEach("visit gallery app and click on the register link", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    cy.url().should("include", "/register");
  });

  it("register without last name provided", () => {
    cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
    cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
    cy.get(locators.commonFormElements.passwordInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.passwordConfirmationInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register without number in password", () => {
    cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
    cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
    cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
    cy.get(locators.commonFormElements.passwordInput).type(
      userData.randomPasswordWithoutNumber
    );
    cy.get(locators.registerPage.passwordConfirmationInput).type(
      userData.randomPasswordWithoutNumber
    );
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register without '@' in email address", () => {
    cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
    cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
    cy.get(locators.commonFormElements.emailInput).type(
      userData.randomEmailWithoutMonkey
    );
    cy.get(locators.commonFormElements.passwordInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.passwordConfirmationInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with password less than 8 characters", () => {
    cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
    cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
    cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
    cy.get(locators.commonFormElements.passwordInput).type(
      userData.randomShortPassword
    );
    cy.get(locators.registerPage.passwordConfirmationInput).type(
      userData.randomShortPassword
    );
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("include", "/register");
  });

  it("register with valid data using locators", () => {
    cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
    cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
    cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
    cy.get(locators.commonFormElements.passwordInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.passwordConfirmationInput).type(
      userData.randomPassword
    );
    cy.get(locators.registerPage.tcCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("not.include", "/register");
  });
});
