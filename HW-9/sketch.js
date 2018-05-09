// const app = document.getElementById('root');
//
// const logo = document.createElement('img');
// logo.src = './images/logo.jpg';
//
// const container = document.createElement('div');
// container.setAttribute('class', 'container');
//
// app.appendChild(logo);
// app.appendChild(container);

var request = new XMLHttpRequest();
var data;
let state = "CA";
request.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200) {
    // console.log(request.responseText);
    data = request.responseText;
    data = JSON.parse(data);
    // console.log(data);
    console.log(data.features[1].attributes.UNIT_NAME);
  }
}

// How do I get permission to use the sites API??!!
// request.open('GET', 'https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Park_Boundaries/FeatureServer/0/query?outFields=*&where=1%3D1', true);
request.open('GET', `https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Park_Boundaries/FeatureServer/0/query?where=UPPER(STATE)%20like%20'%25${state}%25'&outFields=OBJECTID,UNIT_TYPE,STATE,REGION,UNIT_CODE,UNIT_NAME,PARKNAME&returnGeometry=false&outSR=4326&f=json`, true);
request.send();

// request.onload = function () {
//
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(park => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');
//
//       const h1 = document.createElement('h1');
//       h1.textContent = park.name;
//
//       const p = document.createElement('p');
//       park.description = park.description.substring(0, 300);
//       p.textContent = `${park.description}...`;
//
//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// }
//
// function init() {
//    var map = new google.maps.Map(document.getElementById('map-canvas'), {
//      center: {
//        lat: 12.9715987,
//        lng: 77.59456269999998
//      },
//      zoom: 12
//    });
//
//
//    var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
//    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('pac-input'));
//    google.maps.event.addListener(searchBox, 'places_changed', function() {
//      searchBox.set('map', null);
//
//
//      var places = searchBox.getPlaces();
//
//      var bounds = new google.maps.LatLngBounds();
//      var i, place;
//      for (i = 0; place = places[i]; i++) {
//        (function(place) {
//          var marker = new google.maps.Marker({
//
//            position: place.geometry.location
//          });
//          marker.bindTo('map', searchBox, 'map');
//          google.maps.event.addListener(marker, 'map_changed', function() {
//            if (!this.getMap()) {
//              this.unbindAll();
//            }
//          });
//          bounds.extend(place.geometry.location);
//
//
//        }(place));
//
//      }
//      map.fitBounds(bounds);
//      searchBox.set('map', map);
//      map.setZoom(Math.min(map.getZoom(),12));
//
//    });
//  }
//  google.maps.event.addDomListener(window, 'load', init);
//
//  #map-canvas {
//    margin: 0;
//    padding: 0;
//    height: 100%;
//  }
// request.send();
