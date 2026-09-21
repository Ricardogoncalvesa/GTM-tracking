function() {
  var products = {{dlv-eventModel.items}};
  var contents = [];

  for (var i = 0; i < products.length; i++) {
    contents.push({
      id: products[i].id,
      quantity: products[i].quantity
    });
  }

  return contents;
}
