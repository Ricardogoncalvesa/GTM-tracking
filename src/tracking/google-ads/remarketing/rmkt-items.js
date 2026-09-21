function() {
  var productId = {{js-content_id}}; // Substitua pela variável que tem a ID do produto
  return ecommerceProductData = products1.map(function(item) {
    return {
      id: item.id, // Verifique o formato do parâmetro id
      google_business_vertical: 'retail',
    };
  });
}
