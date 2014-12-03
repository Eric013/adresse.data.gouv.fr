API_URL = 'http://bano.fluv.io/search/?';
TILELAYER = 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png';
CENTER = [48.72568, -3.985908];
MAXZOOM = 18;
var searchPoints = L.geoJson(null, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.name);
        }
    });
var showSearchPoints = function (geojson) {
    searchPoints.clearLayers();
    searchPoints.addData(geojson);
}
var formatResult = function (feature, el) {
    var title = L.DomUtil.create('strong', '', el),
        detailsContainer = L.DomUtil.create('small', '', el),
        details = [],
        type = this.formatType(feature);
    title.innerHTML = feature.properties.name;
    details.push(feature.properties.type);
    if (feature.properties.city && feature.properties.city !== feature.properties.name) {
        details.push(feature.properties.city);
    }
    if (feature.properties.context) details.push(feature.properties.context);
    detailsContainer.innerHTML = details.join(', ');
};

var photonControlOptions = {
    resultsHandler: showSearchPoints,
    placeholder: 'Ex. 6 quai de la tourelle cergy…',
    position: 'topright',
    url: API_URL,
    formatResult: formatResult,
    noResultLabel: 'Aucun résultat',
    feedbackLabel: 'Signaler',
    feedbackEmail: 'adresses@data.gouv.fr'
};
var map = L.map('map', {photonControl: true, photonControlOptions: photonControlOptions, attributionControl: false});
map.setView(CENTER, 12);
searchPoints.addTo(map);
var tilelayer = L.tileLayer(TILELAYER, {maxZoom: MAXZOOM, attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap Contributors</a> | Tiles \u00a9 <a href="http://thunderforest.com/">Thunderforest</a>'}).addTo(map);
var attributionControl = L.control.attribution({position: 'bottomleft'}).addTo(map);