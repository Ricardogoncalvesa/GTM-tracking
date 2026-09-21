function() {
  var items = {{DLV - items InitiateCheckout}};

  if (!items || !items.length) {
    return "";
  }

  return items[0].categories_names
    ? items[0].categories_names.join(", ")
    : "";
}
