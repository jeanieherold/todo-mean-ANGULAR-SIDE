/* ================================= 
 geolocation APP Scripts
==================================== */

//===============GeoLocation Map============================

var geocoder;
var map;

  //initializes Louisville on page load
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(38.2527, -85.7585);
    var mapOptions = {
      zoom: 12,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  } //end initialize funciton

  //sets a marker on the map when 'Set Marker' button is clicked
  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  } //end codeAddress function


//===============Dynamic ToDo List=========================

var $dynoList = $('#dynamic-list');
var dynoListHTML = "";

//sets enter task field to null when has focus
$('#task-value').on('focus', function(){
  $('#task-value').val('');
});

//sets address field to null when has focus
$('#address').on('focus', function(){
  $('#address').val('');
});

//add task from task input to the 'ToDo' List
$('#set-marker').on('click', function(){
  // dynoListHTML += '<li>' + $('#task-value').val() + '</li>';

  // $dynoList.html(dynoListHTML);
  
  //reset task input fields to null after click
  $('#task-value').val('');
  $('#address').val('');

});





