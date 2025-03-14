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

cd desafio_calculo_pib

Instale as dependências:

yarn install

Inicie o servidor de desenvolvimento:


yarn dev

Acesse a aplicação no navegador: Geralmente, a aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
O projeto está organizado da seguinte forma:

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
git checkout -b minha-feature

Commit suas alterações:

git commit -m 'Minha nova feature'

Faça o push para a branch:

git push origin minha-feature

Abra um Pull Request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

🔗 Links Úteis

https://chatgpt.com/c/67d47cdd-8380-800b-add9-f4012106587d
https://react.dev/
https://chatgpt.com/c/67d47cdd-8380-800b-add9-f4012106587d#:~:text=Documenta%C3%A7%C3%A3o%20do%20Chart.js
