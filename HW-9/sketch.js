const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = './images/logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// How do I get permission to use the sites API??!!
request.open('GET', 'http://www.nps.gov/npmap/support/library/api/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(park => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = park.name;

      const p = document.createElement('p');
      park.description = park.description.substring(0, 300);
      p.textContent = `${park.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();

// $(document).ready(function() {
//
//     var data = {
//         parks: "",
//
//         setMap: function(value) {
//             data.Parks = value;
//             $('#parks').val(value);
//         },
//
//         populateMap: function() {
//             $('#parks-output').html(data.parks);
//         },
//
//         clearInput: function() {
//             data.setParks('');
//
//         }
//     }
//
//     $('#parks').change(function() {
//         data.setParks($(this).val());
//     });
//
//     $('#submit-parks').on('click', function() {
//         $.getJSON('https://www.google.com/maps/embed/v1/place?key'+data.parks+'/'+data.map, function(result) {
//             data.setParks(result.parks.replace(/\n/g, "<br>"));
//             data.populateMap();
//         });
//     });
//
//     $('#clear-button').on('click', function() {
//         data.clearInput();
//     });
//
// });
