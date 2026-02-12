# Rick and Morty - Character Cards

Aplicacao React com cartoes de personagens da serie Rick and Morty, desenvolvida durante o curso **Frontend Web com ReactJS** do programa [Samsung Ocean](https://oceanbrasil.com/).

---

## Sobre o Projeto

Interface visual com cartoes estilizados exibindo personagens da serie Rick and Morty, utilizando imagens da [Rick and Morty API](https://rickandmortyapi.com/). O projeto foi construido com React Router, TypeScript e TailwindCSS como parte do treinamento Samsung Ocean.

---

## Funcionalidades

- Exibicao de cartoes de personagens (Rick, Morty, Summer)
- Indicador visual de status (Alive/Dead)
- Efeitos de hover com animacao
- Tema escuro com paleta de cores da serie
- Configurado com Docker para deploy

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| React | Biblioteca de interface |
| TypeScript | Tipagem estatica |
| React Router | Roteamento |
| TailwindCSS | Estilizacao |
| Vite | Bundler e dev server |
| Docker | Containerizacao |

---

## Como Executar

```bash
# Clonar o repositorio
git clone https://github.com/lucianomjf14/Treinamento-Ocean.git
cd Treinamento-Ocean

# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicacao estara disponivel em `http://localhost:5173`.

### Com Docker

```bash
docker build -t rick-morty-app .
docker run -p 3000:3000 rick-morty-app
```

---

## Estrutura do Projeto

```
Treinamento-Ocean/
|-- app/
|   |-- routes/
|   |-- welcome/
|   |   |-- welcome.tsx    # Componente dos cartoes de personagens
|   |-- app.css            # Estilos customizados (tema Rick and Morty)
|   |-- root.tsx
|   |-- routes.ts
|-- public/
|-- src/
|-- Dockerfile
|-- vite.config.ts
|-- tsconfig.json
|-- package.json
|-- README.md
|-- LICENSE
```

---

## Certificacao

Projeto desenvolvido durante o curso certificado pelo Samsung Ocean:

- [Frontend Web com ReactJS: Introducao - Parte 1](https://oceanbrasil.com/certificado/cml1iwuy9000q13jkzlt4d3rb_6508)
- [Frontend Web com ReactJS: Introducao - Parte 2](https://oceanbrasil.com/certificado/cml9wijsm000ztq3xjz3yigwe_6507)

---

## Licenca

Este projeto esta licenciado sob a [Licenca MIT](LICENSE).

---

## Autor

**Luciano Marinho Silveira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luciano-marinho-silveira)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucianomjf14)
