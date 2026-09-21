# AUDIT — GTM Tracking V0

## Resultado geral

Os 8 snippets recebidos foram organizados sem alteração da lógica original.

**Status geral:** organização concluída; algumas dependências precisam ser validadas no GTM antes de qualquer correção.

## Inventário

| Arquivo | Fonte principal | Função | Status |
|---|---|---|---|
| `content-ids.js` | `DLV - ecommerce.items` | Extrai `item_id` para array | DEPENDÊNCIA NÃO VALIDADA |
| `content-name.js` | `dlv-ecommerce.items` | Extrai `item_name` para array | DEPENDÊNCIA NÃO VALIDADA |
| `content-category.js` | `DLV - items InitiateCheckout` | Lê categorias do primeiro item | DEPENDÊNCIA NÃO VALIDADA |
| `contents.js` | `dlv-eventModel.items` | Mapeia `id` + `quantity` | DEPENDÊNCIA NÃO VALIDADA |
| `sum-items.js` | `DLV - items InitiateCheckout` | Soma quantidades | DEPENDÊNCIA NÃO VALIDADA |
| `rmkt-items.js` | `products1` / `js-content_id` | Monta itens de remarketing | DEPENDÊNCIA NÃO VALIDADA / INCONSISTÊNCIA |
| `city.js` | `user-dlv-order.address_info.city` | Normaliza cidade | DEPENDÊNCIA NÃO VALIDADA |
| `resolve-email.js` | email do pedido/input/cookie | Resolve email | DEPENDÊNCIA NÃO VALIDADA / DADO SENSÍVEL |

## Pontos que exigem validação

### 1. Nomes diferentes de Data Layer Variable

Foram recebidos estes nomes:

- `{{DLV - ecommerce.items}}`
- `{{dlv-ecommerce.items}}`
- `{{dlv-eventModel.items}}`
- `{{DLV - items InitiateCheckout}}`

Não assumir que são equivalentes. Cada um deve ser confirmado no GTM.

### 2. Remarketing Google Ads

O snippet `rmkt-items.js` contém:

- `productId = {{js-content_id}}`, mas a variável não é utilizada posteriormente.
- `products1` é referenciada, mas não é declarada no snippet.

Isso impede afirmar qual é a fonte correta dos produtos.

**Ação:** validar no GTM qual variável deveria fornecer `products1` antes de corrigir.

### 3. Identidade / email

`resolve-email.js` procura, nesta ordem:

1. `user-dlv-order.customer.email`
2. `user-input-email`
3. `cookie-LeadEmail`

O repositório não contém valores reais. A variável deve ser tratada como dado sensível em qualquer implementação.

### 4. Cidade

`city.js` remove acentos, converte para minúsculas e remove caracteres que não sejam letras ASCII.

Exemplo conceitual:

`Vila Velha` → `vilavelha`

Nenhum dado real foi armazenado no repositório.

## Próximo ciclo

1. Validar cada variável no GTM Preview.
2. Mapear evento → variável → tag.
3. Confirmar o formato esperado pela plataforma de destino.
4. Só então corrigir inconsistências.
