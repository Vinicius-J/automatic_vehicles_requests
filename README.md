### automatic_vehicles_requests

# 🔴 Sprint 1 — Estabilização

## Objetivo

Fazer o fluxo atual funcionar de maneira previsível antes de adicionar qualquer funcionalidade.

### Demandas

- [x] Remover código morto do frontend
- [x] Remover seleniumAPI
- [x] Remover botão de teste
- [x] Definir um único fluxo de submissão
- [x] Corrigir processamento de SARAM
- [x] Corrigir cálculo/iteração das datas
- [x] Corrigir SpreadsheetTitleResolver
- [x] Corrigir leitura A2:E vs 6 colunas
- [x] Corrigir busca da planilha atual
- [x] Definir comportamento para lista vazia de SARAM
- [x] Corrigir nomes dos erros
- [x] Remover erros duplicados
- [x] Fazer o projeto compilar limpo
- [x] Fazer o fluxo completo manualmente

# 🔴 Sprint 2 — Domínio e Use Case

## Objetivo

Tirar a regra de negócio de dentro da automação.

- [x] Criar CreateVehicleRequest
- [x] Separar DTO de domínio
- [x] Criar VehicleRequest
- [x] Criar VehicleRequestResult
- [x] Criar interface da automação
- [x] Criar interface do repository
- [x] Fazer Use Case depender apenas de abstrações
- [x] Tirar Google Sheets do Use Case
- [x] Tirar Playwright do Use Case

# 🔴 Sprint 3 — Validação

## Objetivo

Garantir que dados inválidos nunca cheguem à automação.

- [ ] Zod no IPC
- [ ] Validação de datas
- [ ] Validação de horário
- [ ] Validação de endereço
- [ ] Validação dos SARAMs
- [ ] Mensagens de erro amigáveis
- [ ] Remover validação duplicada do frontend
- [ ] Definir fonte única da validação

# 🔴 Sprint 4 — Automação

## Objetivo

Tornar o Playwright confiável.

- [ ] Refatorar LoginPage
- [ ] Refatorar OrderPage
- [ ] Criar VehicleRequestPage
- [ ] Criar PassengersModal
- [ ] Remover for...in
- [ ] Criar métodos explícitos
- [ ] Timeouts configuráveis
- [ ] Erros específicos de automação
- [ ] Screenshots em falhas
- [ ] Logs
- [ ] Cleanup garantido

# 🔴 Sprint 5 — Persistência

## Objetivo

Tornar Google Sheets uma infraestrutura confiável.

- [ ] Criar VehicleRequestRecord
- [ ] Eliminar string[][] do domínio
- [ ] Definir colunas
- [ ] Corrigir criação de sheets
- [ ] Corrigir busca de sheets
- [ ] Tratamento de API errors
- [ ] Testes do repository
- [ ] Garantir idempotência quando possível

# 🔴 Sprint 6 — Electron

## Objetivo

Transformar o Electron em uma interface profissional.

- [ ] IPC tipado
- [ ] IPC retorna resultado
- [ ] IPC retorna erros
- [ ] Preload tipado
- [ ] Frontend recebe estado
- [ ] Loading
- [ ] Sucesso
- [ ] Erro
- [ ] Desabilitar botão durante execução
- [ ] Mostrar progresso
- [ ] Não bloquear UI

# 🔴 Sprint 7 — Testes

## Objetivo

Chegar a um projeto que você consiga alterar sem medo.

- [ ] Unit tests
- [ ] Use Case tests
- [ ] Repository tests
- [ ] Validation tests
- [ ] Automation tests
- [ ] Testes dos casos de erro
- [ ] Teste de datas
- [ ] Teste de SARAM

# 🔴 Sprint 8 — Segurança e Build

## Objetivo

Deixar um projeto que possa ser seguro e confiável

- [ ] Revisar .env
- [ ] Revisar credentials.json
- [ ] Não distribuir secrets
- [ ] Revisar electron-builder
- [ ] Configurar produção
- [ ] Configurar desenvolvimento
- [ ] Configurar logs
- [ ] Gerar build limpa
- [ ] Testar instalação em máquina limpa
