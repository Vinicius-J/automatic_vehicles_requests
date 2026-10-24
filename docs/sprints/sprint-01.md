# Sprint 01 — Fundamentos da API

## 1. Informações gerais

- Projeto: **Automatic Vehicles Requests**
- Número da sprint: **01**
- Data de início: **A definir**
- Data de término: **A definir**
- Status: **Em análise**

## 2. Objetivo da sprint

- Confirmar os requisitos do formulário real.
- Mapear os seletores e as etapas do sistema original.
- Revisar o cálculo do período e a distribuição dos SARAMs.
- Definir os estados de processamento e os registros persistidos.

## 3. Escopo da sprint

- Atualizar os dados coletados do usuário no formulário inicial.
- Atualizar os seletores para o processamento da automação no sistema original.
- Revisar e atualizar o cálculo do período das solicitações.
- Confirmar se a distribuição dos SARAMs estão sendo feitas corretamente.
- Definir o processamento dos dados e quais dados que deverão ser persistidos no repositório.

## 4. Requisitos relacionados

- **RF-001** — Cadastro dos dados gerais
- **RF-002** — Definição do período
- **RF-003** — Consulta dos SARAMs
- **RF-004** — Distribuição dos SARAMs
- **RF-012** — Registro no Google Sheets

## 5. Tarefas

- [ ] Adicionar novos campos no formulário _HTML_ para a coleta dos dados que faltam do usuário
- [ ] Adicionar os seletores faltantes coletados do usuário para o processamento da automação no sistema original
- [ ] Refatorar o cálculo do período das solicitações que abrangem o dia de início e término sendo contabilizados os mesmos no cálculo
- [ ] Verificar se a cada nova solicitação o SARAM do motorista é diferente do anterior, sendo que a coleta dos SARAMs é feita de cima para baixo e quando chegar no último deverá retornar ao primeiro
- [ ] Definir e atualizar quais dados deverão ser coletados e persistidos no repositório

## 6. Critérios de aceitação

- [ ] O usuário derá ser capaz de informar todos os dados e a solicitação irá ser inicializada somente com o preenchimento de todos os campos do formulário _HTML_ inicial
- [ ] O processamento dos dados deverá ser sequencial e o sistema deverá passar por todos os campos preenchendo-os corretamente com os dados informados pelo usuário
- [ ] Os dias das solicitações deverá abranger o dia de início e término que foi informado pelo usuário
- [ ] A cada nova solicitação, o SARAM utilizado pelo sistema deverá seguir a ordem de ínicio e fim da lista coletada do repositório, sendo que quando chegar ao último item da lista, deverá recomeçar a lista novamente
- [ ] Todos os dados coletados durante o processamento deverão ser persistido no repositório

## 7. Riscos e dificuldades

| Risco / Dificuldade                       | Impacto | Direção de mitigação                                                                                                                      |
| ----------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Usuário informar dados incorretos         | Baixo   | Fazer verificação de dados antes de iniciar o processo                                                                                    |
| Data de início menor que 48h              | Baixo   | Fazer verificação de dados antes de iniciar o processo                                                                                    |
| Data de término anterior a data de início | Baixo   | Fazer verificação de dados antes de iniciar o processo                                                                                    |
| Erro ao coletar a lista de SARAMs         | Alto    | Informar que ouve um erro ao coletar os SARAMs e reiniciar o processo                                                                     |
| Não existir SARAMs no repositório         | Médio   | Cancelar o precesso e solicitar o preenchimento dos SARAMs na planilha do _Google Sheets_                                                 |
| Atraso ao coletar dados no processo       | Médio   | Aguardar para o processamento ter acesso aos dados                                                                                        |
| Erro ao persistir dados no repositório    | Alto    | Salvar dados temporariamente em arquivo _JSON_ local para ser possível reinicar o processo de persistir os dados no repositório principal |

## 8. Resultado da sprint

`O que foi concluído?`

## 9. Retrospectiva

`1. O que funcionou?`
`2. O que não funcionou?`
`3. O que melhorar na próxima sprint?`
