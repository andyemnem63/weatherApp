	$(document).ready(function(){

/*Global Variables
==============================================================*/
 var zipcode = '';


/*Functions
==============================================================*/
var userInput = function(){
	$('.btn').on('click',function(event){
		//Prevent Default action from occuring
		event.preventDefault();
		//Save userInput to zipCode var
		zipcode = $('.input').val();
		
		//Testing
		//console.log(zipcode);
		displayWeather(zipcode);
	});
}

var displayWeather = function(zip){
 var queryUrl = "http://api.wunderground.com/api/97f6d585c538ba46/geolookup/forecast/q/" + zip + ".json";
  $.ajax({
	  url : queryUrl,
	  method:'GET',
	  dataType : "jsonp",
  }).done(function(response) {
	  	var currentWeather = response.forecast.txt_forecast.forecastday[0].fcttext;
	  	var location = response['location']['city'];
	  	//Prints the current weather to DOM
	  	$('.currentWeather').html(currentWeather);
	  	//Prints the location to DOM
	  	$('.location').html(location);
	  	//Testing	
	  	console.log(location);
	});
}



/*Main
==============================================================*/
userInput();

});
