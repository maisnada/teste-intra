


describe('Intranet ambiente de desenvolvimento', () => {

    beforeEach(() => {

        cy.visit('https://desenv.univali.br/intranet/indexMural.php')     
               
    }) 

    it('Deve preencher os campos e realizar o login com sucesso',() => {    
        
        cy.get('input[name="ca_usuario"]').type(Cypress.env('CA_USUARIO'));
        cy.get('input[name="ca_senha"]').type(Cypress.env('CA_SENHA')); 
        cy.get('input[name="ca_chave"]').type(Cypress.env('CA_CHAVE')); 

        cy.contains('input', 'Entrar').click(); 
        
    }) 


    it('Deve exibir conteúdo do cabeçalho e rodapé da página', () => { 
        
        cy.get('input[name="ca_usuario"]').type(Cypress.env('CA_USUARIO'));
        cy.get('input[name="ca_senha"]').type(Cypress.env('CA_SENHA')); 
        cy.get('input[name="ca_chave"]').type(Cypress.env('CA_CHAVE')); 

        cy.contains('input', 'Entrar').click();       

        cy.contains('Universidade do Vale do Itajaí').should('be.visible');
        cy.contains('Home').should('be.visible');
        cy.contains('Central de Atendimento Univali').should('be.visible');
        cy.contains('Todos os direitos reservados').should('be.visible');       
        
    })

    it('Deve exibir o menu por categorias Serviço/Outros/TI', () => { 
        
        cy.get('input[name="ca_usuario"]').type(Cypress.env('CA_USUARIO'));
        cy.get('input[name="ca_senha"]').type(Cypress.env('CA_SENHA')); 
        cy.get('input[name="ca_chave"]').type(Cypress.env('CA_CHAVE')); 

        cy.contains('input', 'Entrar').click(); 
        
        cy.contains('Serviços Intranet').should('be.visible');
        cy.contains('Portal do Aluno (Acadêmico/Financeiro)').should('be.visible');

        cy.contains('Outros Serviços').should('be.visible'); 
        cy.contains('Ambiente Blackboard').should('be.visible'); 

        cy.contains('Serviços TI').should('be.visible');      
        cy.contains('E-mail (Office 365)').should('be.visible');  
      
        cy.enter('[name="muralEletronico"]').then(getBody => {           
            getBody().contains('Em Cima da Hora').should('be.visible')
            getBody().contains('Editais').should('be.visible')
        })
        
    })

    it('Deve exibir o conteúdo do Mural Eletrônico', () => { 
        
        cy.get('input[name="ca_usuario"]').type(Cypress.env('CA_USUARIO'));
        cy.get('input[name="ca_senha"]').type(Cypress.env('CA_SENHA')); 
        cy.get('input[name="ca_chave"]').type(Cypress.env('CA_CHAVE')); 

        cy.contains('input', 'Entrar').click(); 

        cy.enter('[name="muralEletronico"]').then(getBody => {           
            getBody().contains('Em Cima da Hora').should('be.visible')
            getBody().contains('Editais').should('be.visible')
        })
        
    })
  })
  