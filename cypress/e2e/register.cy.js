/// <refernce types="Cypress" />

describe("register tests", () => {
  it("register without first name provided", () => {
    cy.visit("/register");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@mail.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register with email address missing '@'", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-fmail.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register with password less than 8 characters", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@mail.com");
    cy.get("#password").type("Test123");
    cy.get("#password-confirmation").type("Test123");
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register with invalid password confirmation", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@mail.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test123456");
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register without accepting terms and conditions", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@mail.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register with incomplete email address", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@nesto.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
    cy.url().should("include", "/register");
  });

  it("register with valid data", () => {
    cy.visit("/register");
    cy.get("#first-name").type("Filip");
    cy.get("#last-name").type("Nedovic");
    cy.get("#email").type("test-f@mail.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    // cy.get("input[type='checkbox']");
    // cy.get("input").eq(5);
    // cy.get("input").last();
    // cy.get(".form-check-input");
    cy.get("button").click();
    cy.url().should("not.include", "/register");
  });
});
