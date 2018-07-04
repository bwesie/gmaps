$(document).ready(function (){

    function initialize() {
      var myCoords = new google.maps.LatLng(latitude, longitude);

      var mapOptions = {
      center: myCoords,
      zoom: 10,
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);

      var marker = new google.maps.Marker({position: myCoords, map: map, animation: google.maps.Animation.DROP});
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
});