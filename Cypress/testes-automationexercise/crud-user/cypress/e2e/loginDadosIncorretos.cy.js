describe('Dados Incorretos de Login', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com'); 
  });

  it('Usuario com e-mail e senha incorretos', () => {
    cy.get('a > img').should('be.visible');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('.login-form > h2').should('be.visible');

    cy.get('[data-qa="login-email"]').type('julianaasd@email.com');
    cy.get('[data-qa="login-password"]').type('1234');

    cy.get('[data-qa="login-button"]').click();

    cy.get('.login-form > form > p').should('be.visible');

  })
})