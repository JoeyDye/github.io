// Init Materialize Components
M.AutoInit();

// Init Map

function initMap() {
  // Set map options
  const options = {
    zoom: 8,
    center: {
      lat: 36.3,
      lng: -86.7816
    },
    draggable: false,
    draggableCursor: 'default'
  };

  // New map
  const map = new google.maps.Map(document.querySelector('#map'), options);

  // Add marker
  const marker = new google.maps.Marker({
    position: {
      lat: 36.1628,
      lng: -86.7816
    },
    map: map
  });
}
