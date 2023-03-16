/// <refrence types="Cypress" />
import { allGalleriesPage } from "../page_objects/allGalleries";
import { loginPage } from "../page_objects/loginPage";

describe('all galleries page tests', () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com", "Test12345");
        cy.url().should("not.include", "/login");
    });

    it("all galleries successully loaded", () => {
        allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");

        allGalleriesPage.galleriesGrid.children().should("have.length",10);
        allGalleriesPage.children().each((el) => {
            expect(el).to.exist;
        });
        cy.get("button").should("have.length", 2);

    });

    it.only("test pagination", () => {
        allGalleriesPage.galleriesGrid.children().should("have.length", 10);
        allGalleriesPage.loadMoreButton.click();
        allGalleriesPage.galleriesGrid.children().should("have.length", 20);
        allGalleriesPage.loadMoreButton.click();

    });

    it.only("search for specific gallery", () => {
        let searchTerm = "sad je najnovija galerija";
        allGalleriesPage.search(searchTerm);
        
    })
    
});