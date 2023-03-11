/// <refernce types="Cypress" />
import { registerPage } from "../page_objects/registerPage";
import { faker } from "@faker-js/faker";

describe("register tests with POM", () => {
  const userData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8, true) + 1,
  };

  before("visit gallery app and click the register button", () => {
    cy.visit("/");
    registerPage.registerNavbarLink.click();
    cy.url().should("include", "/register");
  });

  it("register with valid data", () => {
    registerPage.registerWithValidData(
      userData.randomFirstName,
      userData.randomLastName,
      userData.randomEmail,
      userData.randomPassword
    );
    cy.url().should("not.include", "/register");
  });
});
