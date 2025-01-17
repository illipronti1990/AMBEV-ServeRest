Feature: Login na plataforma Serverest

  Scenario: Efetuar cadastro 
    Given que o usuário está na página de cadastro
    When o usuário preencher o campo "Digite seu email"
    And preencher o campo "Digite sua senha", clicar no botão "Cadastrar"
    Then o sistema deverá redirecionar para a tela de admnistração do seu ecommerce

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário preencher o campo "Digite seu email" com e-mail valido
    And preencher o campo "Digite sua senha", clicar no botão "Entrar"
    Then o sistema deverá redirecionar para a tela de admnistração do seu ecommerce

  Scenario: Login com e-mail inválido
    Given que o usuário está na página de login
    When o usuário preenche o campo "Digite seu email" com "email invalido"
    And preenche o campo "Digite sua senha", clicar no botão "Entrar"
    Then o sistema deverá exibir uma mensagem de erro "Email inválido"

  Scenario: Login com senha incorreta
    Given que o usuário está na página de login
    When o usuário preenche o campo "Digite seu email" com e-mail valido
    And preencher o campo "Digite sua senha" com "senha errada", clicar no botão "Entrar"
    Then o sistema deverá exibir uma mensagem de erro "Senha incorreta"

  Scenario: Tentativa de login com campos vazios
    Given que o usuário está na página de login
    When o usuário deixa os campos "Digite seu email" e "Digite sua senha" em branco
    And clica no botão "Entrar"
    Then o sistema deverá exibir uma mensagem de erro "Email é obrigatório" e senha "Password é obrigatório"

  Scenario: Navegar para a página de cadastro
    Given que o usuário está na página de login
    When o usuário clicar no link "Cadastre-se"
    Then o sistema deverá redirecionar para a página de cadastro
