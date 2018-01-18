direccionesModulo = (function () {
  var servicioDirecciones
  var mostradorDirecciones

    function calcularRutasConClic () {
    document.getElementById('comoIr').addEventListener('change', function () {
      direccionesModulo.calcularYMostrarRutas()
    })

    document.getElementById('calcularMuchos').addEventListener('click', function () {
      direccionesModulo.calcularYMostrarRutas()
    })

    var listasLugares = document.getElementsByClassName('lugares')
    for (var j = 0; j < listasLugares.length; j++) {
      listasLugares[j].addEventListener('change', function () {
        if (document.getElementById('desde').value != '' && document.getElementById('desde').value != '') {
          direccionesModulo.calcularYMostrarRutas()
        }
      })
    }
  }


    function agregarDireccionEnLista (direccion, coord) {
    var lugaresIntermedios = document.getElementById('puntosIntermedios')

    var haceFaltaAgregar = true
    for (i = 0; i < lugaresIntermedios.length; ++i) {
      if (lugaresIntermedios.options[i].text.replace(/\r?\n|\r/g, ' ') === direccion.replace(/\r?\n|\r/g, ' ')) {
        haceFaltaAgregar = false
      }
    }
    if (haceFaltaAgregar) {
      var opt = document.createElement('option')
      opt.value = coord
      opt.innerHTML = direccion
      lugaresIntermedios.appendChild(opt)
    }
  }

    function agregarDireccionYMostrarEnMapa (direccion, ubicacion) {
    that = this
    var ubicacionTexto = ubicacion.lat() + ',' + ubicacion.lng()
    agregarDireccionEnLista(direccion, ubicacionTexto)
    mapa.setCenter(ubicacion)
    streetViewModulo.fijarStreetView(ubicacion)
    marcadorModulo.mostrarMiMarcador(ubicacion)
  }

  function agregarDireccion (direccion, ubicacion) {
    that = this
    var ubicacionTexto = ubicacion.lat() + ',' + ubicacion.lng()
    agregarDireccionEnLista(direccion, ubicacionTexto)
    mapa.setCenter(ubicacion)
  }

    function inicializar () {
    calcularRutasConClic()

    $('#agregar').keypress(function (e) {
      if (e.keyCode == 13) {
        var direccion = document.getElementById('agregar').value
        geocodificadorModulo.usaDireccion(direccion, direccionesModulo.agregarDireccion)
      }
    })

    $('#desde').keypress(function (e) {
      if (e.keyCode == 13 && document.getElementById('hasta').value != '') {
        direccionesModulo.calcularYMostrarRutas()
      }
    })


    $('#hasta').keypress(function (e) {
      if (e.keyCode == 13 && document.getElementById('desde').value != '') {
        direccionesModulo.calcularYMostrarRutas()
      }
    })
    servicioDirecciones = new google.maps.DirectionsService()
    mostradorDirecciones = new google.maps.DirectionsRenderer({
      draggable: true,
      map: mapa,
      panel: document.getElementById('directions-panel-summary'),
      suppressMarkers: true
    })
  }

  function calcularYMostrarRutas () {
    var ptsIntermedios = []
    var intermedios = document.getElementById('puntosIntermedios')
    for (var i = 0; i < intermedios.length; i++) {
      if (intermedios.options[i].selected) {


        ptsIntermedios.push({
          location: intermedios[i].value,
          stopover: true
        })
      }
    }

    var formaDeIrPedida = document.getElementById('comoIr').value
    console.log(formaDeIrPedida)
    var formaDeIr
    switch (formaDeIrPedida) {
      case 'Caminando':
        formaDeIr = google.maps.TravelMode.WALKING
        break
      case 'Auto':
        formaDeIr = google.maps.TravelMode.DRIVING
        break
      case 'Bus/Subterraneo/Tren':
        formaDeIr = google.maps.TravelMode.TRANSIT
        break
    }


    if (!((formaDeIrPedida === 'Bus/Subterraneo/Tren') && (ptsIntermedios.length > 0))) {
      servicioDirecciones.route({
        origin: document.getElementById('desde').value,
        destination: document.getElementById('hasta').value,
        waypoints: ptsIntermedios,
        optimizeWaypoints: false,
        travelMode: formaDeIr,
        provideRouteAlternatives: true
      }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          mostradorDirecciones.setDirections(response)
        } else {
          swal({
            title: 'Error!',
            text: 'El pedido de direcciones falló debido a ' + status,
            type: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })

      marcadorModulo.agregarMarcadorRuta(document.getElementById('desde').value, 'A', true)

      for (var i = 0; i < ptsIntermedios.length; i++) {

        var letter = String.fromCharCode('B'.charCodeAt(0) + i)
        marcadorModulo.agregarMarcadorRuta(ptsIntermedios[i].location, letter, false)
      }
      marcadorModulo.agregarMarcadorRuta(document.getElementById('hasta').value, String.fromCharCode('B'.charCodeAt(0) + ptsIntermedios.length), false)
    } else {
      swal({
        title: 'Error!',
        text: 'Solo podes hacer este tipo de busqueda sin puntos intermedios',
        type: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
  return {
    inicializar,
    agregarDireccion,
    agregarDireccionEnLista,
    agregarDireccionYMostrarEnMapa,
    calcularYMostrarRutas
  }
}())
