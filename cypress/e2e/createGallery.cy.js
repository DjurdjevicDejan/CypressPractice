/// <reference types="Cypress" />
import { createGalleryPage } from "../page_objects/createGallery";
import { faker } from "@faker-js/faker";

describe("create gallery tests", () => {
  let galleryId;

  before("log in via backend", () => {
    cy.loginViaBackend();
  });

  it("create gallery with valid data", () => {
    cy.intercept({
      method: "POST",
      url: Cypress.env("apiUrl") + "/galleries",
    }).as("galleryCreation");

    // kraca sintaksa
    // cy.intercept("POST", `${Cypress.env("apiUrl")}/galleries`).as(
    //   "galleryCreation"
    // );

    let galleryData = {
      title: faker.lorem.word(),
      description: faker.lorem.words(),
      imageUrl: `${faker.image.imageUrl()}.jpg`,
    };

    cy.visit("/create");
    cy.url().should("include", "/create");
    createGalleryPage.createGallery(
      galleryData.title,
      galleryData.description,
      galleryData.imageUrl
    );

    cy.wait("@galleryCreation").then((interception) => {
      expect(interception.response.statusCode).to.be.equal(201);
      galleryId = interception.response.body.id;

      cy.visit("/galleries/" + galleryId);
      cy.get("h1").should("have.text", galleryData.title);
    });
  });
});
