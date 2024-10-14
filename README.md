

# Simulação de E-commerce - Projeto Next.js

## Visão Geral - Fase 1

Este projeto é uma simulação de uma plataforma de e-commerce desenvolvida pelos alunos. O foco inicial será na construção da interface do usuário, seguida pelo desenvolvimento do back-end e da camada de dados. O projeto utiliza Next.js como framework e MUI (Material-UI) para os componentes da interface.

O projeto será dividido em diferentes funcionalidades, atribuídas a grupos de estudantes (duplas ou um trio). Cada grupo será responsável por desenvolver uma parte específica da interface front-end. Após completar a interface, avançaremos para as outras camadas da aplicação.

LINK DE EXEMPLO: https://bazaar.ui-lib.com/market-2


## Funcionalidades Atribuídas

Cada dupla/trio será responsável pela implementação de uma funcionalidade específica da interface. Abaixo estão as atribuições de funcionalidades:

- Yan & Vitor Hugo: Página de Login
- Welker & Tais: Componente de Card de Produto
- Vitor & Richard: Página de Listagem de Produtos
- Lorran & Davi Vale: Barra de Navegação
- Daniel & Erica: Página de Checkout
- Raphael & Davi: Página de Detalhes do Produto
- Augusto, Arthur & Pedro: Carrinho de Compras

## Estrutura do Projeto

O projeto é construído com Next.js e utiliza MUI para estilização e layout dos componentes. Os alunos focarão nos seguintes pontos:

- Criar componentes reutilizáveis para a interface.
- Cada funcionalidade terá sua própria branch de desenvolvimento.
- Testar componentes em páginas dedicadas antes de integrá-los ao projeto.

# Fase 2: Desenvolvimento do Back-end e Integração de Dados

## Objetivos:

- Desenvolver as APIs necessárias para o e-commerce.
- Conectar a interface desenvolvida na Fase 1 com o back-end.
- Criar e configurar a base de dados usando MongoDB Atlas para armazenar informações sobre produtos, usuários, pedidos e carrinho de compras.
- Implementar autenticação e autorização de usuários usando NextAuth.js.
- Garantir que a aplicação seja funcional e escalável.

# Stack Tecnológico 

- Next.js (Framework React)
- MUI (Material-UI) (Biblioteca de componentes de interface)
- Node.js com Express para o desenvolvimento do back-end.
- MongoDB Atlas para armazenamento de dados.
- NextAuth.js para autenticação e autorização.
- Axios ou Fetch API para consumo das APIs no front-end.

## Tarefas por Grupos:

1. Yan & Vitor Hugo - Autenticação Básica com NextAuth.js
- Descrição: Implementar a autenticação de usuários de forma simples com NextAuth.js.

Tarefas:
- Configurar NextAuth.js para login usando provedores como Google ou credenciais simples (nome e senha).
- Criar uma página de login conectada ao NextAuth.js.
- Testar a autenticação com MongoDB, armazenando apenas nome de usuário e senha (sem necessidade de dados complexos).

2. Welker & Tais - API Simples de Produtos
- Descrição: Criar uma API básica para manipular produtos.

Tarefas:
- Criar uma rota de GET para listar produtos e uma de POST para adicionar novos produtos.
- Armazenar os produtos em MongoDB Atlas com informações básicas: nome, preço e imagem.
- Testar a exibição dos produtos na interface utilizando a rota de GET para listar os itens.

3. Vitor & Richard - Exibição e Filtros Simples de Produtos
- Descrição: Implementar a exibição e filtros básicos para os produtos.

Tarefas:
- Consumir a rota de GET da API de produtos e listar os itens na interface.
- Adicionar um filtro básico por categoria ou faixa de preço.
- Utilizar componentes MUI para organizar a exibição dos produtos.

4. Lorran & Davi Vale - Navegação Simples e Páginas Protegidas
- Descrição: Implementar a navegação e proteger páginas com base na autenticação.

Tarefas:
- Usar NextAuth.js para proteger páginas, como o Carrinho e Checkout, permitindo apenas o acesso de usuários autenticados.
- Testar a navegação entre a página de login e as áreas protegidas.

5. Daniel & Erica - API Simples de Checkout e Pedidos
- Descrição: Criar uma API básica para o processo de checkout e armazenamento de pedidos.

Tarefas:
- Criar uma rota POST para enviar o pedido (produtos, valor total).
- Salvar os pedidos no MongoDB Atlas em uma coleção simples.
- Testar o envio de pedidos a partir da página de Checkout.

6. Raphael & Davi - Página de Detalhes do Produto e Avaliações Básicas
- Descrição: Criar o footer do projeto

Tarefas:
Criar o componente footer para ser usado na página.

7. Augusto, Arthur & Pedro - API Simples do Carrinho de Compras
- Descrição: Desenvolver a API e funcionalidade simples do carrinho de compras.

Tarefas:
- Criar rotas POST e GET para adicionar e listar itens no carrinho.
- Utilizar o MongoDB Atlas para armazenar os itens do carrinho por usuário.
- Exibir os itens do carrinho na interface, consumindo a rota de GET.

# Como utilizar MONGODB ATLAS
- Instale mongodb no projeto
```
npm install mongodb
```

- URL do Banco de Dados: "mongodb+srv://vinicioscararine95:Navaronee897157@cluster0.3pfo9yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


## Branches e Pull Requests

Cada grupo trabalhará em sua funcionalidade em uma branch separada. Os nomes das branches devem corresponder à funcionalidade que estão desenvolvendo. Por exemplo:

- Yan & Vitor Hugo trabalharão na página de login na branch /login.
- Welker & Tais trabalharão no card de produto na branch /product-card.

# Fluxo de Trabalho:

1. Fork do Repositório: Cada aluno deve fazer o fork do repositório principal para sua própria conta no GitHub..

2. Criar uma Branch para Sua Funcionalidade: Após o fork, crie uma branch que corresponda à funcionalidade que está desenvolvendo (por exemplo, /login, /product-card).

3. Atualize Seu Fork: Antes de começar qualquer desenvolvimento, sempre garanta que seu fork esteja atualizado com as últimas mudanças da branch master:

```
git fetch origin
git pull origin master
```

4. Desenvolva e Teste:

- Enquanto desenvolve um componente, crie uma página de teste para garantir que tudo funcione como esperado. Esta página é apenas para testes internos e não deve ser incluída na PR final.
- Por exemplo, se você está trabalhando no card de produto, crie uma página onde você possa ver o componente renderizado na tela e testar seu comportamento.

5. Submeta Apenas o Componente: Uma vez que sua funcionalidade esteja pronta, não envie a página de teste. Envie apenas a pasta e o(s) arquivo(s) respectivo(s) à sua funcionalidade (por exemplo, components/Card.js).

6. Abra uma Pull Request: Quando estiver pronto, submeta sua funcionalidade por meio de uma pull request para a branch correspondente:

- Yan & Vitor Hugo enviarão uma PR para /login.
- Welker & Tais enviarão uma PR para /product-card.
- E assim por diante.

## Boas Práticas

- Sempre Atualize Seu Repositório: Antes de iniciar qualquer novo trabalho, sempre atualize seu repositório para a versão mais recente:

```
git fetch origin
git pull origin master

```

- Commits Pequenos: Faça commits incrementais e frequentes. Isso ajuda a evitar commits grandes e difíceis de gerenciar.

- Rebase com Master: Após o merge de uma pull request de outro grupo, garanta que você faça o rebase da sua branch com a versão mais recente da master:

```
git fetch origin
git rebase origin/master

```

- Isso evita conflitos antes de enviar sua pull request.

- Commits Claros e Objetivos: Use mensagens de commit descritivas, como "Adicionada validação do formulário de login" ou "Criado componente reutilizável de card de produto".


## Conclusão

Este projeto simula um cenário de desenvolvimento real, onde cada grupo contribui independentemente para construir uma aplicação coesa. Certifique-se de colaborar, seguir sua funcionalidade atribuída e respeitar o fluxo de trabalho para garantir uma integração suave entre todas as funcionalidades.

Boa sorte e vamos construir algo incrível juntos!
