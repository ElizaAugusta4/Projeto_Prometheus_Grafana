**Comandos para execução do projeto:**

./prometheus --config.file=prometheus.yml #iniciar o prometheus 

node app.js #iniciar a aplicação web na porta 8080

**Comandos para criação da aplicação web será necessário:**

npm init -y

npm install express

**Passos para instalaçaõ do Grafana e Prometheus:**

* Faça o download do Prometheus no site oficial: https://prometheus.io/download/;

* Extraia o arquivo baixado e navegue até o diretório resultante;

* Dentro do diretório, você encontrará o arquivo de configuração prometheus.yml, que você precisará editar conforme deixei no arquivo commitado;

* Faça o download do Grafana em https://grafana.com/get e escolha a versão adequada ao seu sistema operacional;

* Acesse o Grafana através do navegador usando o endereço http://localhost:3000;

* Faça login com as credenciais padrão (usuário: admin, senha: admin) e altere a senha imediatamente;

* No menu lateral, vá para "Configuration" (Configurações) > "Data Sources" (Fontes de Dados) e adicione uma nova fonte de dados.
Escolha o tipo "Prometheus" e configure o URL para apontar para o servidor onde o Prometheus está sendo executado, por exemplo, http://localhost:8080;

Por fim, Salve e teste a conexão para garantir que o Grafana pode acessar o Prometheus.


**OBS: a aplicação web e o prometheus deverão estar rodando de forma separadas no terminal**
