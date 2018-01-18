streetViewModulo = (function () {
  var paronama

  function inicializar () {
    panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: posicionCentral,
              pov: {
                heading: 0,
                pitch: 0
              },
              visible: true
            })
    mapa.setStreetView(panorama)
  }


  function fijarStreetView (ubicacion) {
    panorama.setPosition(ubicacion)
    mapa.setStreetView(panorama)
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
