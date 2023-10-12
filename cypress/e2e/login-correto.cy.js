describe('Pagina de login', () => {

    beforeEach(() => {

      cy.visit('https://desenv.univali.br/intranet/indexMural.php')
    }) 

    it('Preencher os campos do formulario de forma incorreta', () => {     
      
      cy.contains('Caso você não saiba seu código de pessoa, clique aqui.').should('be.visible');      
      cy.contains('Esqueci minha senha.').should('be.visible'); 
    })
  })
