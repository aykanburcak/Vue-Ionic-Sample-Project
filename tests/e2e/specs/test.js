// https://docs.cypress.io/api/introduction/api.html

describe('Login', () => {
    it('Login user', () => {
        cy.visit('/login')
        cy.get('[name="email"]').type('omerkamcili@hotmail.com');
        cy.get('[name="password"]').type('123123aA');
        cy.get('ion-button').click();
    })
})
