/* ================================= 
  myWeather APP Scripts
==================================== */
var myCity = "Louisville, KY, USA";
//url for page load
var louieUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + myCity + ',us,gb&appid=4009c5b643c6241d5b4c36ce5fac8fff&units=metric';
//google geocodes to convert a zip to city, state, country for initial page load 
$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + myCity + '&sensor=true',getCityState);


//callback funciton for getJSON to retrieve weather conditons
function conditions(weather) {

	var tempF = (weather.main.temp * (9/5)) + 32;

	var weatherInfo = '<p class="location">' + myCity + '</p>';
	weatherInfo += '<p>Temperature: ' + tempF.toFixed(2) + '°F</p>';
	weatherInfo += '<p>Conditions: ' + weather.weather[0].description.toUpperCase() + '</p>';
	weatherInfo += '<p>Humidity: ' + weather.main.humidity + '%</p>';
	weatherInfo += '<p>Winds: ' + weather.wind.speed + '</p>';

	$('#weather-info').html(weatherInfo);

	$('#getWeather').css("cursor", "pointer");

} //end conditions callback function

//button handler to find weather for a new location 
$('#getWeather').on('click', function() {

	$('#getWeather').css("cursor", "wait");

	var city = $('#city').val();
	var state = $('#state').val();
	
	//open weather map api
	var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?zip=' + city + ',us,gb&appid=4009c5b643c6241d5b4c36ce5fac8fff&units=metric';

	$.getJSON(weatherURL, conditions).done(function(){
		//sets the input fields to blank after json response
		$('#city').val("");
		$('#state').val("");
		//set myCity variable using google maps api geocode to convert Open Weather Map response to City, State, Country
		$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&sensor=true',getCityState);
	});

}); //end getweather button click


//on page load --> show louisville, ky
$.getJSON(louieUrl, conditions);


//function to convert zip code to city, state, country
function getCityState(zip) {
	console.log(zip.results[0].formatted_address);
	myCity = zip.results[0].formatted_address;
	$('.location').html('<p class="location">' + myCity + '</p>');
}



// http://api.openweathermap.org/data/2.5/weather?zip=40202,us,gb&appid=4009c5b643c6241d5b4c36ce5fac8fff&units=metric