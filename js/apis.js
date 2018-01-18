var mapa
 var posicionCentral = {
   lat: -34.6037389,
   lng: -58.3815704
 }
function inicializarMapa () {
    
mapa = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: posicionCentral
})
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
