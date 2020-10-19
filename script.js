//document.ready makes sure that everything happens in the right order AND the code goes in between the curly brackets
$(document ).ready(function() {
 //create click function for search button (call search button by ID which is 'searchButton')
 $("#searchButton").click(function(){
    event.preventDefault();
});
 //add "preventDefault to prevent data from flashing")
 //create variables to build URL
 var city = $("#citySearch").val();
 //var city will be the data key (what gets typed in search bar)
 var query = "https://openweathermap.org/api" + city + "&appid=2dc60d0d91aad8df7c1b4bce6bcf58e0"
 console.log(city)
 //var query will be query URL + city + api key
 $.ajax({
    url: query,
    method: "GET"
  })
 //under that we will need an AJAX function to get data from the API and create variables within for the responses (name of city, temperature, humidity, wind)
//then we need a .then function
});