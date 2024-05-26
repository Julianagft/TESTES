describe('Funcionalidades de Cadastro - Email Existente', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com'); 
    });
  
    it('Tentativa de cadastro com email já cadastrado no sistema', () => {
      cy.get('a > img').should('be.visible');
  
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  
      cy.get('.signup-form > h2').should('be.visible');

      cy.get('[data-qa="signup-name"]').type('Maria');
      cy.get('[data-qa="signup-email"]').type('julianateste2@email.com');

      cy.get('[data-qa="signup-button"]').click();

      cy.get('.signup-form > form > p').should('be.visible');

  
    })
  })