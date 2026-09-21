function() {
  var products = {{DLV - ecommerce.items}};
  var contentIds = [];

  for (var i = 0; i < products.length; i++) {
    contentIds.push(products[i].item_id);
  }

  return contentIds;
}
