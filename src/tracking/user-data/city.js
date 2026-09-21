function() {
  var city = {{user-dlv-order.address_info.city}};
  return city ? city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "") : undefined;
}
