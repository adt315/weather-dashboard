
// My API Key:
// a468ca0d8bd9b0455127f58ae98ac8b8

// API calls:
// url:"https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey
// url:"https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey  
// url:"https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
                                                // ^may need an & before lat

$(document).ready(function () {

$("#search-btn").on("click", function(){
    var searchValue = $("#city-search").val();
    $("#city-search").val(""); //clear search field
    weatherSearch(searchValue); //passes an actual variable searchValue
    console.log("search-btn");

});

function weatherSearch (searchValue) {  //this searchValue is a placeholder
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial",
        dataType: "JSON",
        success: function(data) {
            console.log(data)
            $("#today-forecast").empty()
            var temp = $("<p>").text("temperature" + data.main.temp)
            $("#today-forecast").append(temp)
        }
    })
}


// Params I need:
// theirs = the 1st one
// For CURRENT weather:
// name (city name)
//   (date)
//   (weather icon/weather condition)
// main.temp  (temp)
// main.humidity  (humidity)
// wind.speed  (wind speed)
//   (uv index)
// coord.lat (latitude)
// coord.lon (longitude)
// weather (more info Weather condition codes)
// weather.id	(Weather condition id)
// weather.main (Group of weather parameters) (Rain, Snow, Extreme etc.)	-	-	-
// weather.description	(Weather condition within the group)	-	-	-
// weather.icon (Weather icon id)

// For 5 DAY FORECAST:
// sys.dt_txt	(Data/time)


// there's a different request url for uv index - google open weather map uv index
// ---------also need longtitude and latitude - get from first api


// for UV:
//         Server response format
//         lat --> float - latitude for returned data 
//         lon --> float - longitude for returned data 
//         date_iso --> string - date and time corresponding to returned date 
//         date --> integer - ISO 8601 timestamp 
//         value --> float - ultraviolet index



// convert from kelvin to farenheit 
        // add units=imperial parameter into api call



// https://openweathermap.org/weather-conditions
// weather icon list
// 01d.png 	01n.png 	clear sky
// 02d.png 	02n.png 	few clouds
// 03d.png 	03n.png 	scattered clouds
// 04d.png 	04n.png 	broken clouds
// 09d.png 	09n.png 	shower rain
// 10d.png 	10n.png 	rain
// 11d.png 	11n.png 	thunderstorm
// 13d.png 	13n.png 	snow
// 50d.png 	50n.png 	mist
// How to get icon URL
//     For code 500 - light rain icon = "10d"
//     URL is http://openweathermap.org/img/wn/10d@2x.png


// WHEN I search for a city I am presented with current and future conditions for that city and that city is added to the search history


// Current weather conditions for that city include the city name, date, icon, temperature, humidity, wind speed, and UV index



// WHEN I view the UV index I am presented with a color that indicates whether the conditions are favorable, moderate, or severe



// I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity



// WHEN I click on a city in the search history I am again presented with current and future conditions for that city



// WHEN I open the weather dashboard I am presented with the last searched city forecast


});