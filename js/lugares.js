lugaresModulo = (function () {
  var servicioLugares

  function autocompletar () {
    var lugarAutocompleto = new google.maps.places.Autocomplete(document.getElementById('direccion'), { strictBounds: true })
    var desdeAutocompleto = new google.maps.places.Autocomplete(document.getElementById('desde'), { strictBounds: true })
    var hastaAutocompleto = new google.maps.places.Autocomplete(document.getElementById('hasta'), { strictBounds: true })
    var agregarAutocompleto = new google.maps.places.Autocomplete(document.getElementById('agregar'), { strictBounds: true })


    var circulo = new google.maps.Circle({
      center: posicionCentral,
      radius: 20000,
      visible: false,
      map: mapa
    })
    lugarAutocompleto.setBounds(circulo.getBounds())
    desdeAutocompleto.setBounds(circulo.getBounds())
    hastaAutocompleto.setBounds(circulo.getBounds())
    agregarAutocompleto.setBounds(circulo.getBounds())
  }


  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }


  function buscarCerca (posicion) {
    servicioLugares.nearbySearch({
      location: posicion,
      radius: document.getElementById('radio').value,
      types: [document.getElementById('tipoDeLugar').value]
    }, marcadorModulo.marcarLugares)
  }
  return {
    inicializar,
    buscarCerca
  }
})()
