/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("login tests", () => {
  it("login with unregistered user", () => {
    cy.visit("/");
    cy.get("a[href='/login']").click();
    cy.get("#email").type("random@mail.com");
    cy.get("#password").type("Test12345");
    cy.get("button").click();
    cy.url().should("contain", "/login");
  });

  it("login without email address provided", () => {
    cy.visit("/");
    cy.get("a[href='/login']").click();
    cy.get("#password").type("Test12345");
    cy.get("button").click();
    cy.url().should("contain", "/login");
  });

  it("login with valid credentials using locators", () => {
    cy.visit("/");
    cy.get(locators.commonFormElements.navbarLink).eq(1).click();
    cy.get(locators.commonFormElements.emailInput).type(
      "nedovic.filip@gmail.com"
    );
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("not.contain", "/login");
  });

  it("logout", () => {
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("nedovic.filip@gmail.com");
    cy.get("#password").type("Test12345");
    cy.get("button").click();
    cy.url().should("not.contain", "/login");
    // cy.wait(1500);
    cy.get(".nav-link").eq(3).click();
  });
});
