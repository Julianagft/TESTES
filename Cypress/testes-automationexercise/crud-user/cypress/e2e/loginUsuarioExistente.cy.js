describe('Funcionalidade de Login', () => { 
  beforeEach(() => {
    cy.visit('https://automationexercise.com'); 
  });
  
  it('Login de usuario', () => {
    cy.get('a > img').should('be.visible');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('.login-form > h2').should('be.visible');

    cy.get('[data-qa="login-email"]').type('juliana@email.com');
    cy.get('[data-qa="login-password"]').type('juliana123');
    cy.get('[data-qa="login-button"]').click();

    cy.get(':nth-child(10) > a').should('be.visible');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  }) 
})