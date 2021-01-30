# 🌀 Meta Quiz Imersão React

[![Deployment Status](https://img.shields.io/endpoint?url=https://devx.sh/api/deployment)](https://devx.sh)
[![https://img.shields.io/badge/made%20with-nextjs-white](https://img.shields.io/badge/made%20with-nextjs-white)](https://reactjs.org/)
[![https://img.shields.io/badge/made%20with-reactjs-blue](https://img.shields.io/badge/made%20with-reactjs-blue)](https://nextjs.org/)


Este é um Quiz feito na [Imersão React v2](https://site.alura.com.br/imersao-react-next-js/) da Alura sobre a própria Imersão React v2. Um meta-quiz!  

![mind blow gif](https://media3.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

## Features

* **Atomic Design**:  
O projeto foi estruturado com [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) para suas pastas e arquivos.

* **Scoreboard**:  
Todas as submissões do Quiz são salvas no [AirTable](https://airtable.com/) e retornadas no final do Quiz em um placar de pontuação!  

* **Debug Mode**:  
Ao passar `&debug=true` como parâmetro na página de Quiz, apenas a primeira pergunta do `db` será utilizada.  
Útil para testar a tela de resultados ;D 

## Bibliotecas Usadas

* [ReactJS](https://reactjs.org/) e [NextJS](https://nextjs.org/) - para a interface, API e deploy
* [Styled Components](https://styled-components.com/) - para estilização
* [Framer Motion](https://styled-components.com/) e [Lottie React](https://github.com/Gamote/lottie-react) - para efeitos e animações
* [Deployment Badge](https://github.com/FelixMohr/deployment-badge) - para aparecer o badge de deploy no README ([tutorial](https://dev.to/felixmohr/displaying-a-deployment-status-badge-for-your-next-js-app-on-your-github-readme-hml))

## Desenvolvimento

Com [NodeJS](https://nodejs.org/en/) instalado: 
```bash
# Clone este repositório
git clone https://github.com/Markkop/meta-quiz-imersao-react

# Instale as dependências
cd meta-quiz-imersao-react
npm install

# Depois de codar rode
npm run lint

# Para fazer o deploy, basta dar um push
git checkout -b <branch name>
git add .
git commit -m "<commit name>"
git push origin <branch name>
```

## Deploy

O deploy é feito automaticamente com o conteúdo na branch `main` pelo GitHub Actions integrado ao Vercel.  
Mais fácil que isso... acho que nem tem como

