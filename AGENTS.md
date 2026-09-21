# AGENTS.md — GTM Tracking V0

## Objetivo
Este repositório versiona variáveis JavaScript Custom JavaScript do Google Tag Manager usadas na instrumentação de e-commerce.

## Regras
1. Preservar a lógica funcional original dos snippets, salvo alteração explicitamente solicitada.
2. Não inventar variáveis, eventos, objetos, campos ou dependências.
3. Quando uma dependência não puder ser confirmada, registrar como `DEPENDÊNCIA NÃO VALIDADA`.
4. Quando um dado necessário não existir, registrar como `DADO AUSENTE`.
5. Nunca inserir PII real, dados de clientes, tokens, API keys, cookies reais ou segredos no repositório.
6. Não armazenar exports de clientes ou dados de produção.
7. Variáveis GTM devem permanecer separadas de JavaScript de aplicação/Shopify até que a integração seja deliberadamente validada.
8. Não alterar a pasta `.obsidian/` nem arquivos do Segundo Cérebro neste repositório.
9. Alterações devem ser pequenas, rastreáveis e acompanhadas de auditoria quando afetarem dependências.
10. A sequência de análise operacional de referência é: Google Ads → Meta → GA4 → Microsoft Clarity → análise.
11. Antes de corrigir uma variável, identificar exatamente quais variáveis GTM ela consome e qual tag/evento a utiliza.
12. Não substituir silenciosamente nomes de variáveis GTM aparentemente semelhantes.

## Status
V0 = organização e versionamento dos snippets existentes. A lógica recebida do usuário é a fonte de verdade inicial.

## Integração futura
Qualquer integração com Shopify/Liquid, HTML, JavaScript de tema ou server-side tracking deve ser adicionada em estrutura própria e somente após validação da origem dos dados.
