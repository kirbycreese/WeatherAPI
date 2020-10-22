//document.ready makes sure that everything happens in the right order AND the code goes in between the curly brackets
$(document ).ready(function() {
 //create click function for search button (call search button by ID which is 'searchButton')
 $("#searchButton").click(function(){
    event.preventDefault();
    console.log("this works")
//add "preventDefault to prevent data from flashing")
 //create variables to build URL
 var city = $("#citySearch").val();
 //var city will be the data key (what gets typed in search bar)
 var query = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2dc60d0d91aad8df7c1b4bce6bcf58e0"
 console.log(city)
 //var query will be query URL + city + api key
 $.ajax({
    url: query,
    method: "GET"
  })
 //under that we will need an AJAX function to get data from the API and create variables within for the responses (name of city, temperature, humidity, wind)
 //then we need a .then function
 //display the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV indedx
 .then(function (response) {
    //console.log(response, "response")

  var temperature = response.main.temp
    console.log(response.main.temp,"response.main")
    $('#weatherinfo1').html(temperature + '<br>')

    $('#cityname').html(city + '<br>')

  var conditions = response.weather[0].description
    $('#weatherinfo2').html(conditions + '<br>')

  var humidity = response.main.humidity
    $('#weatherinfo3').html("humidity-" + humidity + '<br>')

  var windspeed = response.wind.speed
    $('#weatherinfo4').html("windspeed-" + windspeed + '<br>')
  
  })//closing first .then function
   
  //write out lat and long to link next api inside this .then function
    var latitude = response.coord.lat
    var longitude = response.coord.lon
  //second query
  var query2 = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=2dc60d0d91aad8df7c1b4bce6bcf58e0"

  //second ajax call
  $.ajax({
    url: query2,
    method: "GET"
  })//closing ajax call

  //second .then function
  .then(function (response2) {
console.log(response2)
  })//closing second .then function
});//closing onclick function

});//closing document.ready function