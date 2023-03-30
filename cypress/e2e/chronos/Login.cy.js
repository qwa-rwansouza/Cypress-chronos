/// <reference types="cypress" />

describe('Testes tela de login', () => {
    beforeEach(() => {
      cy.visit('http://chronos.hml.qwa.brasil/login');
    })

    it.skip('Testes de inputs', () => {
      cy.get('.login-form').should('have.attr', 'placeholder', 'Usuário').should('have.css', 'border-color', 'rgb(202, 214, 226)');
      cy.get('.input-content > .input-password').should('have.attr', 'placeholder', 'Senha').should('have.css', 'border-color', 'rgb(202, 214, 226)');

      cy.get('.login-form').click();
      cy.get('.input-content > .input-password').click();

      cy.get('.logo-chronos').click();


      cy.get('.login-form').should('have.css', 'border-color', 'rgb(244, 92, 78)');
      cy.get('.input-content > .input-password').should('have.css', 'border-color', 'rgb(244, 92, 78)');
      
    });

    it.skip('Testes do botão', () => {
      cy.get('.login-form').should('have.value', '');
      cy.get('.input-content > .input-password').should('have.value', '');

      cy.get('[type="submit"]').should('be.disabled');
      cy.get('[type="submit"]').contains('Enviar');
      cy.get('.get-anchor').should('have.css', 'font-family', 'Roboto').should('have.css', 'font-size', '13px' );
    });

  
    it.skip('Fazer login no chronos', () => {

      cy.get('.login-form').type('cypress.user');
      cy.get('.input-content > .input-password').type('admin');
  
      cy.intercept('POST', 'http://qwalx-02.qwa.brasil/chronos-oauth/oauth/token').as('login');
      cy.get('app-submit-button.submit-button > .submit-button').click(); 
    
  
      cy.wait('@login').then((xhr) => {
        console.log(xhr)
        expect(xhr.response.statusCode).be.eq(200);
      });
      
      cy.url().should('be.equal', 'http://chronos.hml.qwa.brasil/dashboard')
      
    });

    it('Testes toasty', () => {
      cy.get('.login-form').type('cypress.user');
      cy.get('.input-content > .input-password').type('admiaan');
      cy.get('[type="submit"]').click();
      
      cy.get('.login-form').clear();
      cy.get('.toast-body')
      
      cy.get('.col-10').contains('Usuário ou senha incorreto!');
    })
  }); 