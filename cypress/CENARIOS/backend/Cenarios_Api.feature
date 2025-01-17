Feature: Login na plataforma Serverest

  Scenario: Efetuar cadastro 
    Given que esteja na API Usuarios
    When inserir os dados "nome", "email" e "password"
    And clicar no Execute
    Then o sistema deverá retornar o código 201 (status sucesso)

  Scenario: Selecionar usuário pelo ID
    Given que esteja na API Usuarios
    When selecionar um usuário pelo ID
    And clicar no Execute
    Then o sistema deverá retornar o código 200 (status sucesso)

  Scenario: Alterar Usuário
    Given que esteja na API Usuarios
    When alterar um usuário pelo ID
    And clicar no Execute
    Then o sistema deverá retornar o código 200 (status sucesso)

  Scenario: Listar usuários
    Given que esteja na API Usuarios
    When listar um usuário por nome 
    And clicar no Execute
    Then o sistema deverá retornar o código 200 (status sucesso)

  Scenario: Cadastrar usuário sem preencher um dos campos obrigatórios
    Given que esteja na API Usuarios
    When tentar cadastrar um usuário sem preencher um dos campos obrigatórios
    And clicar no Execute
    Then o sistema deverá retornar o código 400 (status falha)

  Scenario: Alterar Usuário com ID incorreto
    Given que esteja na API Usuarios
    When alterar um usuário com id incorreto
    And clicar no Execute
    Then o sistema deverá retornar o código 400 (status falha)
