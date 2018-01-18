geocodificadorModulo = (function () {
  var geocodificador
  var mapa

    function usaDireccion (direccion, funcionALlamar) {
        geocodificador.geocode({
          'address': direccion
        }, function (res, status) {
          if (status === google.maps.GeocoderStatus.OK){
            var coodenada = res[0].geometry.location
            funcionALlamar(direccion, coordenada)
      }
    })
  }


  function inicializar () {
    var that = this
    geocodificador = new google.maps.Geocoder()


    document.querySelector('#direccion').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode
      if (key === 13) {

        var direccion = document.getElementById('direccion').value
        that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      }
    })
  }

  return {
    usaDireccion,
    inicializar
  }
})()
