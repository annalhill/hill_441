// Create request
var request = new XMLHttpRequest();

// URL connection
request.open('GET', 'https://www.nationalpark-adventures.com/united-states-national-parks.html', true);

request.onload = function() {
  // Data
  console.log("recieved", response);
}


// Send request
request.send();

// Data
//JSON.parse reads data from URL
var data = JSON.parse(this.response);

data.forEach(park => {
  // Log each movie's title
  console.log(park.name);
});
