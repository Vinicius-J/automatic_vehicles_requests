# Automatic Vehicle Request

## Documento de Escopo do Projeto — Versão 1.0

**Status:** Escopo preliminar consolidado  
**Responsável pelo projeto:** Vinícius Joaquim dos Santos  
**Tipo de aplicação:** Aplicativo desktop para Linux  
**Tecnologias existentes:** Node.js, TypeScript, Electron, Playwright, Zod e Google Sheets API  
**Repositório:** [Vinicius-J/automatic_vehicles_requests](https://github.com/Vinicius-J/automatic_vehicles_requests)

---

# 1. Visão geral do projeto

## 1.1. Contexto

O processo de solicitação de viaturas é realizado manualmente em um sistema institucional. Para cada solicitação, o usuário precisa acessar o sistema, autenticar-se, preencher os dados do pedido, incluir as informações do motorista e confirmar a operação.

Quando é necessário solicitar viaturas para vários dias, grande parte dos dados precisa ser preenchida repetidamente. Esse processo consome tempo e está sujeito a erros de preenchimento, falhas operacionais e dificuldades de acompanhamento.

O projeto Automatic Vehicle Request tem como finalidade automatizar esse fluxo, reduzindo o trabalho repetitivo e aumentando a confiabilidade, a rastreabilidade e a previsibilidade das solicitações.

## 1.2. Problema a resolver

O processo manual atual apresenta os seguintes problemas:

- Repetição de preenchimento de dados para cada dia.
- Tempo elevado para concluir um conjunto de solicitações.
- Possibilidade de erros em campos e seleções.
- Necessidade de acompanhar individualmente cada pedido.
- Dificuldade para recuperar o processamento quando ocorre uma falha.
- Necessidade de manter registros que permitam comprovar e consultar as solicitações realizadas.

O volume informado é de aproximadamente 60 solicitações mensais, com um esforço de um a um dia e meio de trabalho para realizar o processo manualmente.

## 1.3. Objetivo geral

Desenvolver um aplicativo desktop capaz de preparar, revisar, executar, verificar e registrar solicitações de viaturas para um período definido pelo usuário, com autenticação assistida, seleção sequencial de motoristas e recuperação segura de falhas.

## 1.4. Objetivos específicos

1. Reduzir o preenchimento manual repetitivo.
2. Gerar uma solicitação para cada dia do período selecionado.
3. Permitir revisar e corrigir os dados antes da execução.
4. Aproveitar a integração existente com o Google Sheets para obter os SARAMs.
5. Automatizar o preenchimento e a confirmação das solicitações.
6. Verificar se os pedidos foram registrados no sistema original.
7. Registrar os resultados de cada solicitação no Google Sheets.
8. Permitir retomar uma execução interrompida sem duplicar pedidos já confirmados.
9. Distribuir o aplicativo para utilização em outros computadores Linux compatíveis.

---

# 2. Usuários e contexto de utilização

## 2.1. Usuários

O aplicativo será utilizado por pessoas que tenham acesso ao computador autorizado e às credenciais necessárias para acessar o sistema institucional.

Não está previsto, neste escopo inicial, um sistema próprio de contas, perfis ou permissões para vários usuários dentro do aplicativo.

## 2.2. Ambiente de utilização

- Aplicativo desktop para Linux.
- Acesso à internet necessário para interagir com o sistema original e utilizar a API do Google Sheets.
- Autenticação manual no sistema institucional.
- Utilização do Playwright para automatizar o navegador.
- Distribuição preferencial por meio de AppImage, sujeita à validação de compatibilidade.

## 2.3. Premissas

- O usuário possui autorização para realizar as solicitações.
- O sistema original permanece acessível durante a execução.
- O Google Sheets continua sendo a fonte dos SARAMs e o destino do histórico de solicitações.
- O sistema institucional mantém mecanismos de autenticação e consulta dos pedidos.
- O usuário poderá precisar intervir manualmente em situações que não possam ser resolvidas com segurança pela automação.

---

# 3. Escopo funcional

## 3.1. Funcionalidades incluídas

O aplicativo deverá contemplar:

1. Preenchimento dos dados gerais da solicitação.
2. Definição das datas inicial e final.
3. Validação dos dados de entrada.
4. Consulta e validação dos SARAMs no Google Sheets.
5. Geração da lista de solicitações previstas.
6. Exibição de uma prévia para revisão.
7. Retorno ao formulário para correção dos dados.
8. Autenticação manual no sistema original.
9. Execução sequencial das solicitações.
10. Captura do número de cada solicitação.
11. Inclusão do SARAM do motorista.
12. Confirmação final do pedido.
13. Consulta ao sistema original para verificar o registro.
14. Registro individual dos resultados no Google Sheets.
15. Tratamento de erros e interrupções.
16. Retomada de execuções com solicitações pendentes.
17. Empacotamento e distribuição para Linux.

## 3.2. Fora do escopo inicial

Não fazem parte da primeira versão, salvo decisão posterior:

- Aplicativo web ou versão mobile.
- Execução simultânea de múltiplas solicitações.
- Distribuição para Windows ou macOS.
- Sistema próprio de gerenciamento de usuários.
- Automação de autenticação institucional que dispense a intervenção manual.
- Alteração automática dos dados de origem da planilha de SARAMs.
- Regras de escolha de motoristas diferentes da sequência atualmente utilizada.
- Integrações adicionais não necessárias ao processo de solicitação.

---

# 4. Requisitos funcionais

## RF-001 — Cadastro dos dados gerais

O aplicativo deverá permitir informar os dados necessários para preencher uma solicitação de viatura.

Os campos deverão corresponder aos dados exigidos pelo sistema institucional, incluindo, conforme aplicável:

- Material ou especificação da missão.
- Horário de embarque.
- Dados de origem e destino.
- Logradouro, número e bairro.
- Cidade e estado.
- Observação da missão.
- SARAM do solicitante.
- Telefone fixo e celular.
- E-mail.
- Unidade solicitante.
- Tipo de transporte: pessoal, material ou ambos.

A lista definitiva de campos, seus formatos e obrigatoriedade deverá ser confirmada com o formulário real.

## RF-002 — Definição do período

O usuário deverá informar uma data inicial e uma data final.

O aplicativo deverá validar as datas e calcular todas as datas incluídas no período.

## RF-003 — Consulta dos SARAMs

O aplicativo deverá consultar a planilha de origem por meio da Google Sheets API.

A leitura deverá ser concluída com sucesso antes da geração da prévia.

## RF-004 — Distribuição dos SARAMs

O aplicativo deverá percorrer os SARAMs na ordem em que aparecem na planilha, de cima para baixo.

Quando todos os SARAMs disponíveis forem utilizados, a sequência deverá reiniciar pelo primeiro registro, até que todas as solicitações previstas tenham um SARAM atribuído.

## RF-005 — Geração da prévia

O aplicativo deverá gerar uma prévia contendo todas as solicitações previstas para o período.

A prévia deverá apresentar, no mínimo:

- Data de cada solicitação.
- Dados gerais que serão enviados.
- SARAM atribuído.
- Quantidade total de solicitações.

A prévia não poderá iniciar automaticamente qualquer solicitação no sistema original.

## RF-006 — Correção dos dados

Se o usuário identificar uma inconsistência, deverá poder retornar ao formulário principal, corrigir os dados e gerar uma nova prévia.

A nova prévia deverá refletir as correções e a distribuição dos SARAMs resultante da validação atualizada.

## RF-007 — Autenticação assistida

Após aprovar a prévia, o usuário deverá poder acessar o sistema original e realizar o login manualmente.

O aplicativo deverá verificar que a autenticação foi concluída antes de iniciar o processamento.

## RF-008 — Execução das solicitações

O aplicativo deverá executar as solicitações previstas de forma sequencial, respeitando os dados aprovados e o fluxo do sistema original.

## RF-009 — Captura do número da solicitação

Quando o sistema original disponibilizar o número da solicitação no popup, o aplicativo deverá capturá-lo e associá-lo à data e à execução correspondentes.

A captura do número não deverá ser tratada, isoladamente, como prova de conclusão definitiva.

## RF-010 — Inclusão do motorista e confirmação

Para cada pedido, o aplicativo deverá:

1. Preencher o SARAM atribuído.
2. Executar a inclusão do motorista.
3. Acionar o botão de confirmação final.
4. Verificar o resultado da operação.

## RF-011 — Consulta da solicitação

O aplicativo deverá utilizar a página de consulta do sistema original para verificar a existência do pedido.

A consulta permite filtrar por:

- Data inicial e data final.
- Status da solicitação.
- Unidade solicitada.

Os resultados apresentam informações como número da solicitação, data, horário e solicitante.

A correspondência deverá utilizar o número único da solicitação como identificador principal.

## RF-012 — Registro no Google Sheets

O aplicativo deverá registrar individualmente os resultados das solicitações, incluindo, no mínimo:

- Data do pedido.
- Número da solicitação, quando disponível.
- SARAM atribuído.
- Status de processamento.
- Resultado da verificação.
- Data e horário do processamento, conforme definição a ser validada.

O formato definitivo da planilha de saída deverá ser documentado antes da implementação da persistência confiável.

## RF-013 — Tratamento de falhas

Quando ocorrer uma falha que impeça a continuação segura, o aplicativo deverá pausar a execução, informar a etapa afetada e preservar o progresso.

## RF-014 — Retomada

O aplicativo deverá permitir retomar uma execução interrompida, preservando as solicitações já confirmadas e processando apenas as pendentes.

As operações com resultado desconhecido deverão ser verificadas antes de qualquer tentativa de repetição.

---

# 5. Regras de negócio

## RN-001 — Uma solicitação por dia

Deverá existir exatamente uma solicitação prevista para cada data do período, incluindo a data inicial e a data final.

Sábados, domingos e feriados também deverão ser considerados.

A quantidade prevista será equivalente ao número de dias corridos entre as datas, incluindo ambas as extremidades.

## RN-002 — Reinício da sequência de SARAMs

A seleção dos SARAMs deverá respeitar a ordem da planilha. Ao atingir o último registro, a sequência deverá retornar ao primeiro SARAM e continuar.

## RN-003 — Planilha obrigatória

Não deverá ser gerada uma prévia válida quando:

- A API não estiver acessível.
- A planilha não puder ser lida.
- Não houver SARAMs disponíveis.
- Os dados encontrados forem inválidos.

O aplicativo deverá informar o motivo e permitir nova tentativa após a correção.

## RN-004 — Preservação do progresso

Uma solicitação confirmada deverá permanecer registrada mesmo que uma solicitação posterior falhe.

A retomada não deverá apagar o histórico nem repetir automaticamente operações já confirmadas.

## RN-005 — Autorização explícita

A execução só poderá começar após a geração da prévia, a revisão do usuário e a autorização explícita para prosseguir.

## RN-006 — Confirmação da solicitação

O fechamento do popup após o clique em “Confirmar solicitação” será um sinal a ser verificado, não uma garantia isolada de sucesso.

O aplicativo deverá utilizar evidências adicionais, especialmente a consulta do sistema original, sempre que necessário.

## RN-007 — Tratamento de resultado desconhecido

Se houver dúvida sobre a conclusão de uma solicitação, o aplicativo deverá pausar o processamento e permitir a verificação antes de qualquer repetição.

## RN-008 — Consistência da prévia

A lista de SARAMs deverá ser consultada novamente antes da execução.

Se a lista tiver mudado e isso afetar a distribuição dos motoristas, deverá ser gerada uma nova prévia, sujeita a nova aprovação.

## RN-009 — Status do sistema original

Os status “validada”, “realizada” e “em análise” deverão ser registrados e interpretados conforme seu significado real no sistema institucional.

Não se deverá presumir que esses estados são equivalentes.

---

# 6. Fluxo operacional esperado

## Etapa 1 — Preenchimento

O usuário informa o período e os dados gerais da missão.

## Etapa 2 — Validação

O aplicativo verifica os dados obrigatórios, a consistência das datas e a disponibilidade dos SARAMs.

## Etapa 3 — Preparação

O sistema gera as datas previstas e distribui os SARAMs na ordem definida pela planilha.

## Etapa 4 — Revisão

O usuário analisa a prévia. Se houver erros, retorna ao formulário e gera uma nova versão.

## Etapa 5 — Aprovação

O usuário autoriza explicitamente a execução.

## Etapa 6 — Autenticação

O aplicativo abre o sistema original e aguarda o login manual. O processamento só começa após a confirmação do acesso.

## Etapa 7 — Execução individual

Para cada data:

1. Preencher os dados da solicitação.
2. Acionar “Solicitar”.
3. Capturar o número apresentado.
4. Preencher e incluir o motorista.
5. Acionar “Confirmar solicitação”.
6. Verificar o resultado.
7. Registrar o progresso individualmente.

## Etapa 8 — Verificação

Quando necessário, o aplicativo consulta a página de pesquisa e procura o número específico da solicitação.

## Etapa 9 — Persistência

O resultado individual é registrado no Google Sheets, sem depender exclusivamente da conclusão de todo o período.

## Etapa 10 — Encerramento ou retomada

Se todas as solicitações forem processadas, o aplicativo apresenta o resumo final.

Se ocorrer uma falha, pausa o fluxo, preserva o progresso e permite retomar após a verificação das pendências.

---

# 7. Critérios de aceitação globais

A primeira versão poderá ser considerada funcionalmente aceita quando:

1. Gerar corretamente uma solicitação para cada dia do período, incluindo as extremidades.
2. Rejeitar períodos inválidos.
3. Validar os SARAMs antes de gerar a prévia.
4. Respeitar a ordem e o reinício da sequência de SARAMs.
5. Permitir revisar e corrigir os dados antes da execução.
6. Impedir que a execução comece sem aprovação e autenticação concluída.
7. Capturar o número de cada solicitação criada.
8. Distinguir o número capturado da confirmação final.
9. Verificar os resultados por meio do sistema original quando necessário.
10. Registrar individualmente os resultados no Google Sheets.
11. Preservar os registros anteriores diante de falhas.
12. Retomar o processamento sem repetir solicitações já confirmadas.
13. Identificar situações inconclusivas e solicitar intervenção manual.
14. Executar corretamente em um pacote Linux compatível, após validação de distribuição.

---

# 8. Requisitos não funcionais

## RNF-001 — Confiabilidade

A automação deverá lidar com tempos de resposta variáveis e falhas transitórias sem depender exclusivamente de atrasos fixos.

## RNF-002 — Segurança

Credenciais, tokens e dados sensíveis deverão ser tratados de forma segura.

Senhas não poderão ser gravadas em logs ou incorporadas diretamente ao pacote distribuído sem uma estratégia de segurança apropriada.

## RNF-003 — Rastreabilidade

Cada solicitação deverá poder ser associada à sua data, ao número do pedido e ao resultado do processamento.

## RNF-004 — Manutenibilidade

O código deverá manter responsabilidades separadas para validação, geração das solicitações, automação do navegador, persistência e controle da execução.

## RNF-005 — Testabilidade

A aplicação deverá possuir testes automatizados para regras de negócio e cenários de falha, além de testes de integração com o ambiente simulado.

## RNF-006 — Distribuição

O aplicativo deverá ser empacotado para Linux, priorizando o AppImage. A compatibilidade deverá ser validada em computadores distintos, incluindo dependências e configuração externa.

## RNF-007 — Segurança operacional

O sistema deverá evitar duplicidades, perda de progresso e repetição automática de operações cujo resultado seja desconhecido.

---

# 9. Estado atual e reaproveitamento

A análise preliminar do repositório indica que existem componentes que podem ser preservados e evoluídos.

| Componente ou capacidade              | Direção                                                |
| ------------------------------------- | ------------------------------------------------------ |
| Electron e interface desktop          | Reaproveitar                                           |
| Automação com Playwright              | Reaproveitar e validar no sistema original             |
| Validação com Zod                     | Ampliar conforme o formulário real                     |
| Geração de datas                      | Revisar a inclusão das datas inicial e final           |
| Seleção de SARAMs pelo Google Sheets  | Preservar a regra atual e reforçar validações          |
| Integração de saída com Google Sheets | Evoluir para persistência individual e recuperação     |
| Fluxo e automações separados          | Preservar a separação e melhorar o tratamento de erros |
| Página HTML local de exemplo          | Manter como ambiente de testes                         |
| Empacotamento Linux                   | Revisar e validar em ambiente distribuído              |
| Testes automatizados                  | Implementar e ampliar                                  |

A análise do código também identificou pontos que merecem atenção antes de considerar o projeto pronto para uso real:

- A geração de datas pode deixar de incluir corretamente o primeiro dia.
- Os resultados podem depender da conclusão de todo o fluxo antes de serem gravados na planilha.
- O tratamento de erros pode ocultar a causa real de uma falha.
- O fluxo de confirmação final precisa ser verificado no sistema original.
- A configuração de empacotamento precisa ser revisada para evitar a inclusão indevida de credenciais.
- O caminho de carregamento da interface deve ser validado no aplicativo empacotado.
- O formulário e o schema devem ser comparados com todos os campos exigidos pelo sistema real.

Esses pontos são achados preliminares da inspeção do código, não resultados de testes de execução no sistema original.

---

# 10. Riscos identificados

| Risco                                  | Impacto                                   | Direção de mitigação                                                 |
| -------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| Atrasos ou falhas do site              | Interrupção do fluxo                      | Esperas baseadas no estado da página e tratamento explícito de erros |
| Confirmação com resultado desconhecido | Solicitação duplicada                     | Consulta antes de repetir                                            |
| Falha na API do Google Sheets          | Perda de rastreabilidade                  | Persistência individual e recuperação de registros pendentes         |
| Sessão expirada                        | Falha de autenticação                     | Pausar e solicitar intervenção do usuário                            |
| Alteração da lista de SARAMs           | Divergência da prévia                     | Revalidar antes da execução                                          |
| Seletores incompatíveis                | Falha de automação                        | Validar no sistema original                                          |
| Empacotamento inadequado               | Aplicativo não inicia em outro computador | Testes de distribuição                                               |
| Credenciais incluídas no pacote        | Exposição de informações sensíveis        | Rever a configuração e o armazenamento de segredos                   |

---

# 11. Plano preliminar de evolução

## Sprint 1 — Diagnóstico e preparação

- Confirmar os requisitos do formulário real.
- Mapear os seletores e as etapas do sistema original.
- Revisar o cálculo do período e a distribuição dos SARAMs.
- Definir os estados de processamento e os registros persistidos.
- Estabelecer testes automatizados para as regras de negócio.

**Resultado esperado:** base de requisitos e comportamento interno confiável antes da integração real.

## Sprint 2 — Prévia e aprovação

- Implementar a geração da prévia.
- Exibir datas e SARAMs atribuídos.
- Permitir retornar ao formulário.
- Revalidar a planilha antes da execução.
- Exigir aprovação explícita.

**Resultado esperado:** o usuário consegue revisar a execução prevista antes de qualquer solicitação ser criada.

## Sprint 3 — Integração controlada

- Validar o login manual.
- Adaptar a automação ao sistema original.
- Testar uma solicitação autorizada.
- Verificar captura do número, inclusão do motorista e confirmação.
- Validar a consulta posterior do pedido.

**Resultado esperado:** fluxo real validado de ponta a ponta em condições controladas.

## Sprint 4 — Recuperação e rastreabilidade

- Persistir resultados individualmente.
- Diferenciar sucesso, falha e resultado desconhecido.
- Implementar pausa e retomada.
- Evitar duplicidades.
- Testar falhas de rede, sessão e resposta do sistema.

**Resultado esperado:** recuperação segura e histórico consistente.

## Sprint 5 — Distribuição e estabilização

- Revisar credenciais e configurações externas.
- Validar o pacote AppImage.
- Testar em outro computador Linux.
- Corrigir problemas encontrados.
- Atualizar documentação e instruções de utilização.

**Resultado esperado:** versão distribuível com fluxo validado e limitações documentadas.

As sprints são uma proposta inicial. A ordem e a duração deverão ser ajustadas após a avaliação dos testes e do esforço real de cada etapa.

---

# 12. Pendências que precisam ser resolvidas

Antes de considerar o escopo definitivo, será necessário esclarecer:

1. A lista completa de campos obrigatórios do sistema original.
2. Os critérios confiáveis para identificar uma solicitação concluída.
3. O significado operacional de cada status retornado pela consulta.
4. O comportamento quando a consulta não encontra um pedido imediatamente.
5. O formato definitivo do histórico no Google Sheets.
6. A estratégia de recuperação quando o pedido foi confirmado, mas a gravação na planilha falhou.
7. A estratégia de persistência do progresso entre encerramentos ou reinicializações do aplicativo.
8. A estratégia de configuração e proteção das credenciais e tokens.
9. As dependências e os requisitos de compatibilidade do AppImage.
10. A validação do fluxo completo no sistema original.

---

# 13. Definição de sucesso do projeto

O projeto será considerado bem-sucedido quando conseguir transformar o período informado em solicitações revisáveis, executá-las no sistema original com autorização do usuário, verificar seus resultados, registrar o histórico e recuperar falhas sem duplicar pedidos confirmados.

A prioridade não é apenas automatizar os cliques. É garantir que o usuário consiga saber **o que foi solicitado, o que foi confirmado, o que permanece pendente e o que precisa de verificação manual**.

**Próxima etapa recomendada:** revisar este documento como referência de escopo e iniciar a avaliação técnica do código existente, requisito por requisito, antes de definir as tarefas finais da primeira sprint.
