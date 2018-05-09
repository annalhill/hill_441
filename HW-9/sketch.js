
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
