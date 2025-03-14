# 📊 Desafio Cálculo do PIB  

![Badge de Licença](https://img.shields.io/badge/licença-MIT-blue.svg)  

## 📖 Descrição  

Este projeto é uma aplicação React que consome dados da API do IBGE para exibir informações sobre o Produto Interno Bruto (PIB) e a população brasileira ao longo do tempo. Os usuários podem visualizar gráficos interativos e tabelas detalhadas que representam a evolução desses indicadores.  

## 🚀 Funcionalidades  

- 📊 Visualização de gráficos interativos do PIB e da população.  
- 📋 Exibição de tabelas detalhadas com os dados obtidos da API.  
- 🔄 Navegação intuitiva entre as diferentes visualizações.  

## 🛠 Tecnologias Utilizadas  

- ⚛️ **React** - Biblioteca principal para construção da UI  
- ⚡ **Vite** - Ferramenta para desenvolvimento rápido  
- 🔀 **React Router DOM** - Gerenciamento de rotas  
- 🌐 **Axios** - Requisições HTTP  
- 📈 **Chart.js** - Biblioteca para gráficos  
- 🎨 **Tailwind CSS** - Estilização moderna e responsiva  
- ✅ **Vitest** - Testes automatizados  

## 📦 Instalação  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/Shost01/desafio_calculo_pib.git
   ```
2. **Navegue até o diretório do projeto:**  
   ```bash
   cd desafio_calculo_pib
   ```
3. **Instale as dependências:**  
   ```bash
   yarn install
   ```
4. **Crie um arquivo `.env` e configure a variável de ambiente:**  
   ```bash
   VITE_API_URL=https://api.ibge.gov.br/
   ```
5. **Inicie o servidor de desenvolvimento:**  
   ```bash
   yarn dev
   ```
6. **Acesse a aplicação no navegador:**  
   Normalmente, estará disponível em [`http://localhost:3000`](http://localhost:3000).  

## 📂 Estrutura do Projeto  

```
desafio_calculo_pib/
├── public/
├── src/
│   ├── assets/                     # Arquivos estáticos  
│   ├── components/                 # Componentes reutilizáveis  
│   │   ├── navbar/                 # Navbar principal  
│   │   ├── pibchart/               # Gráficos do PIB  
│   │   ├── pibtable/               # Tabelas do PIB  
│   ├── context/                    # Gerenciamento de estado global  
│   ├── models/                     # Definição de tipos e interfaces  
│   ├── pages/                      # Páginas principais  
│   │   ├── home/                   # Página inicial  
│   │   ├── pib/                    # Página de informações do PIB  
│   ├── services/                   # Comunicação com APIs  
│   ├── tests/                      # Testes automatizados  
│   ├── App.tsx                     # Componente raiz  
│   ├── main.tsx                    # Ponto de entrada da aplicação  
│   ├── index.css                    # Estilos globais  
├── .gitignore  
├── index.html  
├── package.json  
├── tsconfig.json  
└── vite.config.ts  
```

## 🤝 Contribuição  

Contribuições são bem-vindas! Para contribuir:  

1. Faça um **fork** do repositório.  
2. Crie uma branch para sua feature ou correção:  
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:  
   ```bash
   git commit -m "Adiciona minha nova feature"
   ```
4. Faça o push para a branch:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.  

## 📜 Licença  

Este projeto está licenciado sob a **Licença MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.  

## 🔗 Links Úteis  

- [Documentação do React](https://react.dev/)  
- [Documentação do Vite](https://vitejs.dev/)  
- [Documentação do Chart.js](https://www.chartjs.org/docs/latest/)  

