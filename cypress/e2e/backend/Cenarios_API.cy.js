import generateRandomEmail from '../../support/Gerar_email';

describe('Usuário', () => {
  const url = 'usuarios';
  const randomEmail = generateRandomEmail();

  it('Cadastrar Usuário', () => {
    cy.fixture('usuario').then(data => {
      const requestBody = data;
      requestBody.email = randomEmail;

      cy.InserirUrlAndBody(url, requestBody, 'POST').then(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body.message).to.eq('Cadastro realizado com sucesso');
      })
    })
  });

  it('Selecionar usuário pelo ID', () => {
    const id = '6Nkt7VlftWD3gqpw';

    cy.getById('GET', `${url}/${id}`).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.nome).to.eq('Renan Illipronti');
      expect(body._id).to.eq(id);
    })
  });

  it('Alterar Usuário', () => {
    cy.fixture('usuario').then(data => {
      const id = '6Nkt7VlftWD3gqpw'
      const requestBody = data;
      requestBody.email = generateRandomEmail();

      cy.InserirUrlAndBody(`${url}/${id}`, requestBody, 'PUT').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.message).to.eq('Registro alterado com sucesso');
      })
    })
  });

  it('Listar usuários', () => {
    const nome = 'Renan Illipronti'

    cy.getById('GET', `${url}?nome=${nome}`).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body)
        .to.have.property('quantidade')
        .to.be.greaterThan(1);
    })
  });

  it('Cadastrar usuário sem preencher um dos campos obrigatórios', () => {
    cy.fixture('usuario').then(data => {
      const requestBody = data;

      cy.InserirUrlAndBody(url, requestBody, 'POST', false).then(({ status, body }) => {
        expect(status).to.eq(400);
        expect(body.email).to.eq('email não pode ficar em branco');
      })
    })
  });

  it('Alterar Usuário com ID incorreto', () => {
    cy.fixture('usuario').then(data => {
      const idIncorreto = 'idIncorretoTeste'
      const requestBody = data;
      requestBody.email = generateRandomEmail();

      cy.InserirUrlAndBody(`${url}/${idIncorreto}`, requestBody, 'PUT', false).then(({ status, body }) => {
        expect(status).to.eq(400);
      })
    })
  });
});
