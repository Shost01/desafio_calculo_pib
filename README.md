# Desafio Cálculo do PIB

![Badge de Licença](https://img.shields.io/badge/licença-MIT-blue.svg)

## Descrição

Este projeto é uma aplicação React que consome dados da API do IBGE para exibir informações sobre o Produto Interno Bruto (PIB) e a população brasileira ao longo do tempo. Os usuários podem visualizar gráficos e tabelas que representam a evolução desses indicadores.

## Funcionalidades

- 📊 Visualização de gráficos interativos do PIB e da população.
- 📋 Exibição de tabelas detalhadas com os dados obtidos da API.
- 🔄 Navegação intuitiva entre as diferentes visualizações.

## Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca principal para construção da UI
- 🚀 **Vite** - Ferramenta para desenvolvimento rápido
- 🔀 **React Router** - Gerenciamento de rotas
- 🌐 **Axios** - Requisições HTTP
- 📈 **Chart.js** - Biblioteca para gráficos

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Shost01/desafio_calculo_pib.git
Navegue até o diretório do projeto:

bash
Copiar
Editar
cd desafio_calculo_pib
Instale as dependências:

bash
Copiar
Editar
yarn install
ou

bash
Copiar
Editar
npm install
Uso
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
yarn dev
ou

bash
Copiar
Editar
npm run dev
Acesse a aplicação no navegador: Geralmente, a aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
O projeto está organizado da seguinte forma:

pgsql
Copiar
Editar
desafio_calculo_pib/
├── public/
├── src/
│   ├── components/
│   │   ├── Menu.tsx
│   │   ├── Graph.tsx
│   │   └── Table.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
src/components/: Contém os componentes React, como Menu, Graph e Table.
src/services/: Inclui serviços para comunicação com APIs, como o api.ts.
src/App.tsx: Componente principal da aplicação.
src/main.tsx: Ponto de entrada da aplicação.
Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.
Crie uma branch para sua feature ou correção:
bash
Copiar
Editar
git checkout -b minha-feature
Commit suas alterações:
bash
Copiar
Editar
git commit -m 'Minha nova feature'
Faça o push para a branch:
bash
Copiar
Editar
git push origin minha-feature
Abra um Pull Request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

🔗 Links Úteis

API do IBGE
Documentação do React
Documentação do Chart.js
