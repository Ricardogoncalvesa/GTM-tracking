function() {
  var items = {{DLV - items InitiateCheckout}};
  var totalQuantity = 0;

  for (var i = 0; i < items.length; i++) {
    totalQuantity += Number(items[i].quantity) || 0;
  }

  return totalQuantity;
}
