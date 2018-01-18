var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

function success (pos) {
  var crd = pos.coords

  console.log('La posición detectada por el navegador :')
  console.log('Latitud : ' + crd.latitude)
  console.log('Longitud: ' + crd.longitude)
  console.log('Precisión de ' + crd.accuracy + ' metros.')
  posicionCentral = { lat: crd.latitude, lng: crd.longitude }
  mapa.setCenter(posicionCentral)
  streetViewModulo.fijarStreetView(posicionCentral)
};

function error (err) {
  console.warn('ERROR(' + err.code + '): ' + err.message)
}
navigator.geolocation.getCurrentPosition(success, error, options)


function mostrarOcultarPano () {
  var x = document.getElementById('pano')
  if (getComputedStyle(x, null).visibility === 'hidden') {
    x.style.visibility = 'visible'
  } else {
    x.style.visibility = 'hidden'
  }
}


$(document).ready(function () {
  $('.up').click(function () {
    var $op = $('#puntosIntermedios option:selected')
    if ($op.length) {
      $op.first().prev().before($op)
    }
  })
})


$(document).ready(function () {
  $('.down').click(function () {
    var $op = $('#puntosIntermedios option:selected')
    if ($op.length) {
      $op.last().next().after($op)
    }
  })
})


function mostrarValor (n) {
  document.querySelector('#radioS').value = n + ' mts'
}


var tiposDeLugares = [{
  value: 'accounting',
  text: 'Contabilidad'
}, {
  value: 'airport',
  text: 'Aeropuerto'
}, {
  value: 'amusement_park',
  text: 'Parque de atracciones'
}, {
  value: 'aquarium',
  text: 'Acuario'
}, {
  value: 'art_gallery',
  text: 'Galería de arte'
}, {
  value: 'atm',
  text: 'Cajero automático'
}, {
  value: 'bakery',
  text: 'Panadería'
}, {
  value: 'bank',
  text: 'Banco'
}, {
  value: 'bar',
  text: 'Bar'
}, {
  value: 'beauty_salon',
  text: 'Salón de belleza'
}, {
  value: 'bicycle_store',
  text: 'Tienda de bicicletas'
}, {
  value: 'book_store',
  text: 'Librería'
}, {
  value: 'bowling_alley',
  text: 'Bolera'
}, {
  value: 'bus_station',
  text: 'Estación de autobuses'
}, {
  value: 'cafe',
  text: 'Cafetería'
}, {
  value: 'campground',
  text: 'Terreno de camping'
}, {
  value: 'car_dealer',
  text: 'Vendedor de autos'
}, {
  value: 'car_rental',
  text: 'Alquiler de coches'
}, {
  value: 'car_repair',
  text: 'Reparación de autos'
}, {
  value: 'car_wash',
  text: 'Lavado de coches'
}, {
  value: 'casino',
  text: 'Casino'
}, {
  value: 'cemetery',
  text: 'Cementerio'
}, {
  value: 'church',
  text: 'Iglesia'
}, {
  value: 'city_hall',
  text: 'Palacio Municipal'
}, {
  value: 'clothing_store',
  text: 'Tienda de ropa'
}, {
  value: 'convenience_store',
  text: 'Tienda de conveniencia'
}, {
  value: 'courthouse',
  text: 'Palacio de justicia'
}, {
  value: 'dentist',
  text: 'Dentista'
}, {
  value: 'department_store',
  text: 'Grandes almacenes'
}, {
  value: 'doctor',
  text: 'Doctor'
}, {
  value: 'electrician',
  text: 'Electricista'
}, {
  value: 'electronics_store',
  text: 'Tienda de electrónicos'
}, {
  value: 'embassy',
  text: 'Embajada'
}, {
  value: 'establishment',
  text: 'Establecimiento'
}, {
  value: 'finance',
  text: 'Financiar'
}, {
  value: 'fire_station',
  text: 'Estación de bomberos'
}, {
  value: 'florist',
  text: 'Florista'
}, {
  value: 'food',
  text: 'Comida'
}, {
  value: 'funeral_home',
  text: 'Casa funeraria'
}, {
  value: 'furniture_store',
  text: 'Tienda de muebles'
}, {
  value: 'gas_station',
  text: 'Gasolinera'
}, {
  value: 'general_contractor',
  text: 'Contratista general'
}, {
  value: 'grocery_or_supermarket',
  text: 'Supermercado o verdulería'
}, {
  value: 'gym',
  text: 'Gimnasio'
}, {
  value: 'hair_care',
  text: 'Cuidado del cabello'
}, {
  value: 'hardware_store',
  text: 'Ferretería'
}, {
  value: 'health',
  text: 'Salud'
}, {
  value: 'hindu_temple',
  text: 'Templo hindú'
}, {
  value: 'home_goods_store',
  text: 'Almacén'
}, {
  value: 'hospital',
  text: 'Hospital'
}, {
  value: 'insurance_agency',
  text: 'Agencia de seguros'
}, {
  value: 'jewelry_store',
  text: 'Joyería'
}, {
  value: 'laundry',
  text: 'Lavandería'
}, {
  value: 'lawyer',
  text: 'Abogado'
}, {
  value: 'library',
  text: 'Biblioteca'
}, {
  value: 'liquor_store',
  text: 'Tienda de licores'
}, {
  value: 'local_government_office',
  text: 'Local_government_office'
}, {
  value: 'locksmith',
  text: 'Cerrajero'
}, {
  value: 'lodging',
  text: 'Alojamiento'
}, {
  value: 'meal_delivery',
  text: 'Entrega de comida'
}, {
  value: 'meal_takeaway',
  text: 'Comida para llevar'
}, {
  value: 'mosque',
  text: 'Mezquita'
}, {
  value: 'movie_rental',
  text: 'Pelicula'
}, {
  value: 'movie_theater',
  text: 'Cine'
}, {
  value: 'moving_company',
  text: 'Empresa de mudanzas'
}, {
  value: 'museum',
  text: 'Museo'
}, {
  value: 'night_club',
  text: 'Club nocturno'
}, {
  value: 'painter',
  text: 'Pintor'
}, {
  value: 'park',
  text: 'Parque'
}, {
  value: 'parking',
  text: 'Estacionamiento'
}, {
  value: 'pet_store',
  text: 'Tienda de mascotas'
}, {
  value: 'pharmacy',
  text: 'Farmacia'
}, {
  value: 'physiotherapist',
  text: 'Fisioterapeuta'
}, {
  value: 'place_of_worship',
  text: 'Lugar de adoración'
}, {
  value: 'plumber',
  text: 'Fontanero'
}, {
  value: 'police',
  text: 'Policía'
}, {
  value: 'post_office',
  text: 'Oficina postal'
}, {
  value: 'real_estate_agency',
  text: 'Real_estate_agency'
}, {
  value: 'restaurant',
  text: 'Restaurante'
}, {
  value: 'roofing_contractor',
  text: 'Contratista de techos'
}, {
  value: 'rv_park',
  text: 'Rv_park'
}, {
  value: 'school',
  text: 'Colegio'
}, {
  value: 'shoe_store',
  text: 'Tienda de zapatos'
}, {
  value: 'shopping_mall',
  text: 'Centro comercial'
}, {
  value: 'spa',
  text: 'Spa'
}, {
  value: 'stadium',
  text: 'Estadio'
}, {
  value: 'storage',
  text: 'Almacenamiento'
}, {
  value: 'store',
  text: 'Almacenar'
}, {
  value: 'subway_station',
  text: 'Estación de metro'
}, {
  value: 'synagogue',
  text: 'Sinagoga'
}, {
  value: 'taxi_stand',
  text: 'Parada de taxi'
}, {
  value: 'train_station',
  text: 'Estación de tren'
}, {
  value: 'travel_agency',
  text: 'Agencia de viajes'
}, {
  value: 'university',
  text: 'Universidad'
}, {
  value: 'veterinary_care',
  text: 'cuidado veterinario'
}, {
  value: 'zoo',
  text: 'Zoo'
}]


$.each(tiposDeLugares, function (i, item) {
  $('#tipoDeLugar').append($('<option>', {
    value: item.value,
    text: item.text
  }))
})
