/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe("login tests using POM", () => {
  beforeEach("visit the app and click the login button", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
  });

  it("login with invalid credentials", () => {
    loginPage.login("nedovic.filip@gmail", "Test12345");
    cy.url().should("contain", "/login");
    loginPage.errorMessage
      .should("exist")
      .and("be.visible")
      .and("have.text", "Bad Credentials")
      .and("have.css", "background-color", "rgb(248, 215, 218)")
      .and("have.css", "color", "rgb(114, 28, 36)")
      .and("have.class", "alert-danger");
    cy.get(".nav-link").should("have.length", 3);
  });

  it("login with valid credentials", () => {
    loginPage.login("nedovic.filip@gmail.com", "Test12345");
    cy.url().should("not.contain", "/login");
  });
});
