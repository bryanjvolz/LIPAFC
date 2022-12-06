describe('Checks for navigation', () => {
  it('verifies navigation', () => {
    cy.visit('https://www.lipafc.local/');
    cy.url().should('eq','https://www.lipafc.local/');

    cy.get('.main-nav ul li').should('have.length', 5);
    cy.get('a[aria-label="LIPAFC.com Home"]').should('be.visible');
  })
})