# GTM Tracking

Repositório V0 para versionamento dos snippets **Custom JavaScript Variables** usados no Google Tag Manager.

## Estrutura

```
GTM-tracking/
├── AGENTS.md
├── README.md
├── AUDIT.md
├── .gitignore
└── src/
    └── tracking/
        ├── meta/
        │   └── product-data/
        │       ├── content-ids.js
        │       ├── content-name.js
        │       ├── content-category.js
        │       └── contents.js
        ├── google-ads/
        │   └── remarketing/
        │       └── rmkt-items.js
        ├── ecommerce/
        │   └── cart/
        │       └── sum-items.js
        └── user-data/
            ├── city.js
            └── resolve-email.js
```

## O que este repositório contém

- Variáveis JavaScript personalizadas do GTM.
- Dependências explícitas de Data Layer/GTM.
- Registro das inconsistências encontradas durante a auditoria.
- Base para futura validação de tracking e integração com Shopify.

## O que este repositório NÃO contém

- PII real de clientes.
- Tokens, senhas ou API keys.
- Exports de produção.
- Arquivos da pasta `.obsidian/`.
- Código de aplicação Shopify/Liquid que ainda não foi fornecido.

## Fluxo de validação

1. Confirmar evento e Data Layer.
2. Confirmar nome exato das variáveis GTM.
3. Confirmar estrutura de `items`.
4. Testar a variável no Preview do GTM.
5. Confirmar payload da tag de destino.
6. Comparar com GA4/Meta/Google Ads.
7. Registrar qualquer divergência em `AUDIT.md`.

> V0 preserva os snippets recebidos. Não foram feitas correções silenciosas.
