function() {

  if ({{user-dlv-order.customer.email}}) {

    // Se tiver informação no Datalayer executa, senão procura
    return ({{user-dlv-order.customer.email}});

  } else if ({{user-input-email}}) {

    // Se tiver informação no Input do site executa, senão procura
    return ({{user-input-email}});

  } else if ({{cookie-LeadEmail}}) {

    // Se tiver informação no Cookie executa, então use
    return ({{cookie-LeadEmail}});

  } else {

    return undefined;

  }

}
