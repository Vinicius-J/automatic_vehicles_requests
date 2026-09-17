# 🚙 Automatic Vehicle Request

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Electron](https://img.shields.io/badge/Electron-43-47848F)
![Playwright](https://img.shields.io/badge/Playwright-automation-2EAD33)
![Zod](https://img.shields.io/badge/Zod-validation-3E67B1)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

## 📖 Sobre o projeto

O **Automatic Vehicle Request** é uma aplicação desktop desenvolvida para **automatizar o processo de criação de solicitações de veículos em um sistema web externo**.

A aplicação recebe os dados da solicitação, realiza a validação das informações, processa os dados necessários e utiliza **Playwright** para executar automaticamente as etapas no sistema web.

Além da automação, o projeto possui integração com **Google Sheets** para leitura e armazenamento de informações relacionadas às solicitações.

O projeto foi desenvolvido com foco em:

- Separação de responsabilidades
- Organização e escalabilidade do código
- Desenvolvimento backend com TypeScript
- Validação de dados
- Tratamento de erros
- Integração com serviços externos
- Automação de navegador
- Aplicação desktop distribuível para Linux

---

## ✨ Funcionalidades

- ✅ Criação automática de solicitações de veículos
- ✅ Validação dos dados de entrada utilizando **Zod**
- ✅ Automação do sistema web utilizando **Playwright**
- ✅ Integração com **Google Sheets**
- ✅ Processamento automático das datas das solicitações
- ✅ Tratamento de erros personalizados
- ✅ Separação entre regras de aplicação e infraestrutura
- ✅ Aplicação desktop utilizando **Electron**
- ✅ Comunicação entre frontend e backend através de **IPC**
- ✅ Build e distribuição para Linux

---

## 🔄 Fluxo da aplicação

De forma simplificada, o fluxo da aplicação funciona da seguinte maneira:

```text
┌──────────────┐
│    Usuário   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Frontend   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Electron IPC │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     DTO      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Zod Schema   │
│  Validation  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Use Case   │
└──────┬───────┘
       │
       ├──────────────────┐
       ▼                  ▼
┌──────────────┐   ┌───────────────┐
│ Google Sheets│   │    Workflow   │
└──────────────┘   └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │   Playwright  │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  Sistema Web  │
                    │    Externo    │
                    └───────────────┘
```

---

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura organizada em camadas, buscando manter as responsabilidades separadas e reduzir o acoplamento entre as diferentes partes da aplicação.

### Principais camadas

| Camada           | Responsabilidade                                                              |
| ---------------- | ----------------------------------------------------------------------------- |
| `core`           | Contratos, DTOs, interfaces, erros, enums e abstrações centrais               |
| `automation`     | Casos de uso, workflows, factories e componentes relacionados à automação     |
| `infrastructure` | Implementações concretas de Playwright, Google Sheets, repositories e mappers |
| `electron`       | Configuração do Electron e comunicação através de IPC                         |
| `frontend`       | Interface da aplicação desktop                                                |
| `schemas`        | Validação dos dados de entrada utilizando Zod                                 |

A separação permite que regras da aplicação não dependam diretamente de detalhes específicos de infraestrutura.

Por exemplo, componentes responsáveis pela aplicação podem trabalhar com interfaces e contratos, enquanto as implementações concretas ficam na camada de infraestrutura.

---

## 📂 Estrutura do projeto

```text
src
├── automation
│   ├── automations
│   ├── factories
│   ├── selectors
│   ├── useCases
│   ├── utils
│   └── workflows
│
├── core
│   ├── config
│   ├── dto
│   ├── enums
│   ├── errors
│   │   ├── automationErrors
│   │   ├── browserErrors
│   │   ├── loginErrors
│   │   └── repositoryErrors
│   ├── interfaces
│   └── repositories
│
├── electron
│   ├── config
│   └── ipc
│
├── frontend
│   ├── css
│   └── views
│
├── infrastructure
│   ├── googleSheets
│   ├── mappers
│   ├── playwright
│   ├── repositories
│   └── utils
│
└── schemas
```

---

## 🧠 Conceitos e práticas aplicados

Durante o desenvolvimento foram aplicados conceitos importantes de desenvolvimento backend e arquitetura de software, incluindo:

- **TypeScript** para tipagem estática
- **DTOs** para transferência de dados entre camadas
- **Zod** para validação das entradas
- **Interfaces** para definição de contratos
- **Repository Pattern**
- **Mappers** para transformação de dados
- **Factories** para criação de objetos
- **Use Cases** para organização das regras da aplicação
- **Workflows** para orquestração de processos
- **Custom Errors** para tratamento de erros específicos
- **Separação de responsabilidades**
- **Injeção e inversão de dependências**
- **Variáveis de ambiente** para configuração
- **Browser automation** com Playwright
- **IPC (Inter-Process Communication)** para comunicação no Electron
- Integração com **Google Sheets**
- Aplicação desktop distribuível com **Electron**

---

## 🛠️ Tecnologias utilizadas

### Backend

- **Node.js**
- **TypeScript**

### Automação

- **Playwright**

### Validação

- **Zod**

### Desktop

- **Electron**

### Integrações

- **Google Sheets**

### Configuração

- **dotenv**

---

## 📋 Requisitos

Antes de executar o projeto, certifique-se de possuir:

- Linux
- Node.js 18 ou superior
- npm ou Yarn
- Acesso ao sistema web que será automatizado
- Configuração das credenciais necessárias para integração com o Google Sheets

> Atualmente o projeto é desenvolvido e distribuído para ambientes Linux.

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Vinicius-J/automatic_vehicles_requests.git
```

### 2. Entre na pasta do projeto

```bash
cd automatic_vehicles_requests
```

### 3. Instale as dependências

Utilizando npm:

```bash
npm install
```

Ou utilizando Yarn:

```bash
yarn
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto.

Utilize o `.env.example` como referência:

```env
SPREADSHEET_ID=
URL_PAGE_REQUEST=
```

### Variáveis de ambiente

| Variável           | Descrição                                             |
| ------------------ | ----------------------------------------------------- |
| `SPREADSHEET_ID`   | ID da planilha utilizada pela aplicação               |
| `URL_PAGE_REQUEST` | URL da página utilizada para realizar as solicitações |

### 🔐 Credenciais

Credenciais, tokens e outras informações sensíveis **não devem ser adicionados ao repositório**.

Utilize arquivos locais ou variáveis de ambiente para armazenar informações sensíveis e certifique-se de que esses arquivos estejam incluídos no `.gitignore`.

---

## ▶️ Executando em desenvolvimento

Para executar a aplicação em ambiente de desenvolvimento:

```bash
npm start:electron
```

O processo de desenvolvimento realiza a compilação do código TypeScript e inicia a aplicação Electron.

> Os comandos disponíveis podem variar conforme os scripts definidos no `package.json`.

---

## 🏗️ Build

Para gerar o build da aplicação:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta:

```text
dist/
```

O processo de build também prepara os arquivos necessários para a distribuição da aplicação desktop.

---

## 🚀 Executando a versão de produção

Após realizar o build, os artefatos de distribuição serão disponibilizados na pasta:

```text
release/
```

Dependendo da configuração do Electron Builder, a aplicação pode ser distribuída através de diferentes formatos para Linux.

<!-- ---

## 🖥️ Aplicação

A aplicação possui uma interface desktop desenvolvida com Electron, permitindo que o usuário forneça os dados necessários para a criação das solicitações.

> 📸 Screenshots da aplicação podem ser adicionados posteriormente em `docs/images/`.

Exemplo:

```markdown
![Tela principal](docs/images/main-screen.png)
``` -->

---

## 🧪 Testes

O projeto utiliza ferramentas do ecossistema JavaScript/TypeScript para testes automatizados.

A estratégia de testes busca priorizar componentes isolados e funções que possuem responsabilidades bem definidas, incluindo partes relacionadas ao fluxo de automação.

Exemplo de áreas que podem ser testadas:

- Validação de dados
- Factories
- Mappers
- Funções de processamento
- Regras de negócio
- Componentes de automação isolados

---

## 🔒 Segurança

Este projeto interage com sistemas externos e pode utilizar informações de autenticação e configuração.

Por isso:

- Não armazene senhas no código-fonte
- Não versionar tokens ou credenciais
- Utilize variáveis de ambiente para configurações sensíveis
- Mantenha arquivos de credenciais fora do controle de versão
- Não compartilhe informações de autenticação em issues ou Pull Requests

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto continua recebendo melhorias relacionadas à arquitetura, testes, tratamento de erros, automação e experiência de utilização.

---

## 🗺️ Próximos passos

Algumas melhorias planejadas para o projeto incluem:

- [ ] Expandir a cobertura de testes automatizados
- [ ] Melhorar os testes dos componentes de automação
- [ ] Aprimorar o tratamento e categorização de erros
- [ ] Melhorar a interface da aplicação
- [ ] Aprimorar a configuração de distribuição
- [ ] Aumentar a capacidade de manutenção e extensibilidade da automação

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.

---

## 👨‍💻 Autor

Desenvolvido por **Vinícius Joaquim dos Santos**

GitHub:
https://github.com/Vinicius-J

LinkedIn:
https://www.linkedin.com/in/vinicius-j/

---

## ⭐ Contribuição

Contribuições são bem-vindas.

Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua alteração

```bash
git checkout -b minha-feature
```

3. Faça suas alterações
4. Realize o commit

```bash
git commit -m "Minha nova feature"
```

5. Envie a branch

```bash
git push origin minha-feature
```

6. Abra um Pull Request
