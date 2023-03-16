// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginViaBackend", (email, password) =>{
    cy.request({
        method: "POST",
        url: "https://gallery-api.vivifyideas.com/api/auth/login",
        body: {
            email: email,
            password: password,
        },
    })
    .its("body")
    .then((response) => {
        window.localStorage.setItem("token", response.access_tokken);
    });
});

Cypress.Commands.add(
    "registerViaBackend",
    (firstName, LastName, email, password) =>{
            cy.request({
                method: "POST",
                url: "https://gallery-api.vivifyideas.com/api/auth/register",
                body: {
                    first_name: firstName,
                    last_name: LastName,
                    email: email,
                    password: password,
                    password_confirmation: password,
                    terms_and_conditions: true,
                },
            });
        }
        );