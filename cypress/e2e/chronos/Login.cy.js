/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      cy.visit('http://chronos.hml.qwa.brasil/login');
    })
  
    it('Fazer login no chronos', () => {

      // cy.get('.login-form').should('have.attr', 'placeholder', 'Usuário');
      // cy.get('.login-form').type('cypress.souza');
      // cy.get('.input-content').type('admin');


      cy.get('.login-form').should('have.css', 'border-color', 'rgb(202, 214, 226)');

      cy.get('.login-form').type('x').clear();
      cy.get('.input-content > .input-password').type('admin').clear();
      
      cy.get('.logo-chronos').click();

      cy.get('.login-form').should('have.css', 'border-color', 'rgb(244, 92, 78)');
      cy.get('.input-content > .input-password').should('have.css', 'border-color', 'rgb(244, 92, 78)');


      cy.get('.get-anchor').should('have.css', 'font-family', 'Roboto').should('have.css', 'font-size', '13px' ); // yields 'sans-serif'


      
      // cy.get('app-submit-button.submit-button > .submit-button').click(); 
      // cy.get('.toast-body')
      // cy.get('.col-10').contains('Usuário ou senha incorreto!');
  
      // cy.intercept('POST', 'http://www.chronos.qwasolucoes.com.br/chronos-oauth/oauth/token').as('login');
      // cy.get('app-submit-button.submit-button > .submit-button').click(); 
    
  
      // cy.wait('@login').then((xhr) => {
      //   console.log(xhr)
      //   expect(xhr.response.statusCode).be.eq(200);
      // });    
    });
  
    it('Testar se o botão de login está desab...', () => {
      cy.get('.login-form').should('have.value', '');
  
      cy.get('button.btn').should('be.disabled');
  
      cy.get('[type="submit"]').should('be.disabled');
  
    });
  }); 