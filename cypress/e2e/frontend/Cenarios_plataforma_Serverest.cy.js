import { urlFront } from '../../support/url';
import generateRandomEmail from '../../support/Gerar_email'

describe('Login', () => {
  const randomEmail = generateRandomEmail()

  beforeEach(() => {
    cy.visit(urlFront);
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para prevenir que o Cypress falhe o teste em caso de erro não capturado
    return false;
  });

  it('Efetuar cadastro ', () => {
    cy.gettitle('Login');

    cy.getbyDataTest('cadastrar').click();
    cy.getbyDataTest('nome').type('Renan Illipronti').should('have.value', 'Renan Illipronti');
    cy.getbyDataTest('email').type(randomEmail).should('have.value', randomEmail);
    cy.getbyDataTest('password').type('Teste123').should('have.value', 'Teste123');
    cy.getbyDataTest('checkbox').check();

    cy.getbyDataTest('cadastrar').click();
    cy.getbyClass('alert-link').should('have.text', 'Cadastro realizado com sucesso');
    cy.getbyClass('lead').should('have.text', 'Este é seu sistema para administrar seu ecommerce.');
  });

  it('Login com credenciais válidas', () => {
    cy.gettitle('Login');
    cy.getbyDataTest('email').type(randomEmail).should('have.value', randomEmail);
    cy.getbyDataTest('senha').type('Teste123').should('have.value', 'Teste123');
    cy.getbyDataTest('entrar').click();
    cy.getbyClass('lead').should('have.text', 'Este é seu sistema para administrar seu ecommerce.');
  });

  it('Login com e-mail inválido', () => {
    cy.gettitle('Login');
    cy.getbyDataTest('email').type('emailInvalido@Teste.com').should('have.value', 'emailInvalido@Teste.com');
    cy.getbyDataTest('senha').type('Teste123').should('have.value', 'Teste123');
    cy.getbyDataTest('entrar').click();

    cy.get('span').eq(1).should('have.text', 'Email e/ou senha inválidos');
  });

  it('Login com senha incorreta', () => {
    cy.gettitle('Login');
    cy.getbyDataTest('email').type(randomEmail).should('have.value', randomEmail);
    cy.getbyDataTest('senha').type('senha errada').should('have.value', 'senha errada');
    cy.getbyDataTest('entrar').click();

    cy.get('span').eq(1).should('have.text', 'Email e/ou senha inválidos');
  });

  it('Tentativa de login com campos vazios', () => {
    cy.getbyDataTest('entrar').click();

    cy.get('span').eq(1).should('have.text', 'Email é obrigatório');
    cy.get('span').eq(3).should('have.text', 'Password é obrigatório');
  });

  it('Navegar para a página de cadastro', () => {
    cy.getbyDataTest('cadastrar').click();
    cy.get('h2').should('have.text', 'Cadastro');
  });
});
