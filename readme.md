# Projeto de Automação ServeRest com Cypress

Este projeto utiliza o Cypress para automatizar testes web e de API. Ele inclui a configuração necessária para rodar testes de forma eficiente, além de instruções para instalação de dependências e execução dos testes

# Estrutura do Projeto
Web Automation: Contém os testes e2e para a interface do usuário
API Automation: Inclui testes para endpoints RESTful

# Pasta cypress:
CENARIOS: Contém os cenários front e backend nos arquivos .feature
e2e: Contém os arquivos de teste
fixtures: Armazena dados mockados para os testes
support: Contém comandos personalizados e configurações globais
Arquivo de configuração: cypress.config.js

# Pré-requisitos
Node.js: Certifique-se de que o Node.js está instalado (versão recomendada: 16 ou superior)
Gerenciador de pacotes: Use npm (instalado com o Node.js) ou yarn
Git: Caso deseje clonar o projeto

# Instalação
# 1 Clone o repositório
git clone URL-DO-REPOSITÓRIO
cd NOME-DO-PROJETO

# 2 Instale as dependências
Obs.: Todos os plugins necessários estão especificados no arquivo package.json. O comando npm install instalará automaticamente as dependências

# Como Executar os Testes
# 1. Testes em Modo Interativo
Para abrir o Cypress e rodar os testes manualmente:
npx cypress open

# 2. Testes no Modo Headless
Para rodar todos os testes automaticamente no terminal:
npx cypress run

# 3. Rodando um Teste Específico
Para executar apenas um teste ou uma spec:
npx cypress run --spec "cypress/e2e/seu-teste.cy.js"

# Comandos Personalizados
# 1. Requisitos: 
A. Verificar se existe o JDK instalado em sua maquina
B. Caso não exista, baixe a última versão do JDK e instale na sua máquina
C. Vá nas variáveis de ambiente e configure JAVA_HOME e coloque o caminho da pasta que foi instalado o JDK

# 2. Executar testes no navegador Electron
Este comando executa os testes no navegador Electron em modo "headed" (com interface gráfica) e utiliza o mocha-allure-reporter para geração de relatórios:
npm run browser:electron


# 3. Gerar e abrir relatórios Allure
Para gerar relatórios Allure a partir dos resultados dos testes e abri-los em um navegador:
npm run report:allure

# Explicação:
allure generate allure-results --clean -o allure-report: Gera os relatórios a partir dos resultados salvos.
allure open allure-report: Abre o relatório gerado no navegador.
