function() {
  var products = {{dlv-ecommerce.items}};
  var contentName = [];

  for (var i = 0; i < products.length; i++) {
    contentName.push(products[i].item_name);
  }

  return contentName;
}
