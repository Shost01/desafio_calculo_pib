# 📊 Desafio Cálculo do PIB  

![Badge de Licença](https://img.shields.io/badge/licença-MIT-blue.svg)  

## 📖 Descrição  

Este projeto é uma aplicação React que consome dados da API do IBGE para exibir informações sobre o Produto Interno Bruto (PIB) e a população brasileira ao longo do tempo. Os usuários podem visualizar gráficos interativos e tabelas detalhadas que representam a evolução desses indicadores.  

🔗 **Deploy da Aplicação:** [evolucaopib.netlify.app](https://evolucaopib.netlify.app/)  

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

## 🎨 Decisões de Design e Tecnologias Utilizadas  

Durante o desenvolvimento deste projeto, algumas decisões foram tomadas para garantir um código limpo, modular e eficiente:  

### 📌 **Design da Aplicação**  

- **Experiência do Usuário (UX):** A interface foi projetada para ser intuitiva e responsiva, garantindo uma navegação fluida e facilitando a compreensão dos dados apresentados.  
- **Estilização com Tailwind CSS:** O Tailwind foi escolhido para agilizar o desenvolvimento e manter um design moderno, utilizando classes utilitárias para evitar CSS redundante.  
- **Componentização:** O projeto foi estruturado com **componentes reutilizáveis**, como gráficos, tabelas e a barra de navegação, facilitando manutenção e escalabilidade.  
- **Tema Simples e Leve:** A escolha de cores e espaçamentos foi baseada em uma abordagem minimalista, destacando as informações principais sem poluir a interface.  

### ⚙️ **Escolha das Tecnologias**  

- **React com Vite:** O Vite foi utilizado para melhorar a performance no desenvolvimento, proporcionando um ambiente rápido e eficiente.  
- **React Router DOM:** Implementado para facilitar a navegação entre páginas sem recarregar a aplicação.  
- **Chart.js:** Escolhido por ser uma biblioteca poderosa e fácil de integrar com React, possibilitando a exibição de gráficos interativos.  
- **Axios:** Utilizado para fazer requisições HTTP de forma otimizada e com melhor controle sobre os dados retornados.  
- **Vitest:** Adotado para a realização de testes unitários e garantir a estabilidade da aplicação.  

Essas escolhas foram feitas para garantir um código modular, escalável e de fácil manutenção, além de proporcionar uma ótima experiência para os usuários.  

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

## 📜 Envio do Código Fonte  

1. **Código Fonte:**  
   O código completo da aplicação está disponível em um repositório Git. Certifique-se de que as instruções acima permitam a execução do projeto localmente.  

2. **Documentação:**  
   - Este arquivo README.md inclui:  
     - 📌 Instruções detalhadas para instalação e execução.  
     - 🛠 Explicação das decisões de design e tecnologias utilizadas.  
     - 🔗 Link para o deploy da aplicação: [evolucaopib.netlify.app](https://evolucaopib.netlify.app/)  

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
