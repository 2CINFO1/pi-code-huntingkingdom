let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.8869, lng: 9.5375 },
        zoom: 7,
    });
}

window.initMap = initMap;