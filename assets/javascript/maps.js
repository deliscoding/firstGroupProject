$(document).ready(function () {

    var geolocation;
    var map;

    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                // Testing/Debugging //
                console.log(geolocation);
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                var elevator;
                var myOptions = {
                    zoom: 15,
                    center: geolocation,
                    mapTypeId: 'terrain'
                };
                map = new google.maps.Map($('#map')[0], myOptions);


                var marker = new google.maps.Marker({
                    position: geolocation,
                    map: map,
                    title: 'Google Maps'
                });

            });

        }

        $('#barResults').append('<div id="map">');

    } // end of geolocate

    geolocate();


}); // end of document ready