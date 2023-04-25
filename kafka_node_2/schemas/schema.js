const Schema = 
`
{
  "type": "record",
  "name": "updateSalesOrder",
  "namespace": "integrations.s4_oms.ecommerce.fulfillmentUpdate.v2",
  "doc": "Envio de ordem de vendas para o OMS",
  "fields": [
    {
      "name": "id",
      "type": "string",
      "doc": "ID do pedido no sistema emissor(alfanumérico de 1 a 35 caracteres)"
    },
    {
      "name": "salesOrderId",
      "type": "string",
      "doc": "Número da ordem de venda gerada no S/4 (numérico de 1 a 10 dígitos)"
    },
    {
      "name": "outboundDeliveryId",
      "type": "string",
      "doc": "Opcional Número da remessa gerada no S/4 (numérico de 1 a 10 dígitos)"
    },
    {
      "name": "deliveryBlock",
      "type": "string",
      "doc": "Opcional - Identificador de Bloqueio/Desbloqueio da Remessa ( Bloqueado 'ZR' ou Desbloqueado '')"
    },
    {
      "name": "soldToParty",
      "type": "string",
      "doc": "Código do cliente no S/4 (numérico de 1 a 10 dígitos)"
    },
    {
      "name": "creationDate",
      "type": "string",
      "doc": "Data de criação da remessa no S/4 (YYYY-MM-DD)"
    },
    {
      "name": "items",
      "type": {
        "type": "array",
        "items": {
          "type": "record",
          "name": "items",
          "fields": [
            {
              "name": "itemNumber",
              "type": "string",
              "doc": "Número do item (numérico de 1 a 6 dígitos)"
            },
            {
              "name": "material",
              "type": "string",
              "doc": "Código S/4 do material (SKU) (alfanumérico de 1 a 18 caracteres)"
            },
            {
              "name": "quantity",
              "type": "string",
              "doc": "Quantidade (decimal de 1 a 12 dígitos inteiros e 0 a 3 dígitos de fração"
            },
            {
              "name": "quantityUnit",
              "type": "string",
              "doc": "Unidade de medida (alfanumérico de 0 a 3 caracteres)"
            },
            {
              "name": "productionPlant",
              "type": "string",
              "doc": "Código do centro de origem (alfanumérico de 1 a 4 caracteres)"
            }
          ]
        }
      }
    }
  ]
}`

module.exports = {
  Schema
}