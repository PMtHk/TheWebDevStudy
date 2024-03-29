mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/outdoors-v10', // style URL
  center:
    campground.geometry.coordinates === undefined
      ? [126.9784147, 37.5666805]
      : campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 11, // starting zoom
  projection: 'globe', // display the map as a 3D globe
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h5>${campground.title}</h5><p>${campground.location}</p>`
    )
  )
  .addTo(map);
  
