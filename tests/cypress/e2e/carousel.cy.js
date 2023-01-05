describe('Checks for navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.lipafc.local/');
  })


  it('Verifies carousel has slides', () => {
    cy.url().should('eq','https://www.lipafc.local/');
    cy.get('#featured-matchups .swiper-slide').should(($lis) => {
      expect($lis, '9 items').to.have.length(9)
      expect($lis.eq(0), 'first item').to.contain('30 AD');
      expect($lis.eq(1), 'second item').to.contain('2018 Playoffs');
      expect($lis.eq(2), 'third item').to.contain('1926');
    })

  });

  it('Verifies carousel loads', () => {
    cy.url().should('eq','https://www.lipafc.local/');
    cy.get('.swiper-container.swiper-initialized').should('have.length', 1);
  });

  it('Verifies carousel functions on Desktop', () => {
    cy.viewport('macbook-13');
    cy.url().should('eq','https://www.lipafc.local/');
    cy.get('.swiper-slide.swiper-slide-active h2').contains('2018 Playoffs');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide.swiper-slide-active h2').contains('1926');

    cy.wait(500);
    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide.swiper-slide-active h2').contains('1918');
  });

  it('Verifies carousel functions on mobile', () => {
    cy.viewport('iphone-6');
    cy.url().should('eq','https://www.lipafc.local/');
    cy.get('.swiper-slide.swiper-slide-active h2').contains('2018 Playoffs');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide.swiper-slide-active h2').contains('1926');

    cy.wait(500);
    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide.swiper-slide-active h2').contains('1918');
  });
});
