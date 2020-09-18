
// My API Key:
// a468ca0d8bd9b0455127f58ae98ac8b8

// API calls:

// Params I need:
// theirs = the 1st one
// For CURRENT weather:
// name (city name)
//   (date)
// main.temp  (temp)
// main.humidity  (humidity)
// wind.speed  (wind speed)
//   (uv index)
// coord.lat (latitude)
// coord.lon (longitude)
// weather (more info Weather condition codes)
// weather.id	(Weather condition id)
// weather.main (Group of weather parameters) (Rain, Snow, Extreme etc.)
// weather.description	(Weather condition within the group)	
// weather.icon (Weather icon id)

// For 5 DAY FORECAST:
// sys.dt_txt	(Data/time)


$(document).ready(function () {

    $("#search-btn").on("click", function () {
        var searchValue = $("#city-search").val();
        $("#city-search").val(""); //clear search field
        weatherSearch(searchValue); //passes an actual variable searchValue
    });

    function weatherSearch(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial",
            dataType: "JSON",
            success: function (data) {
                console.log(data);

                $("#current-weather").empty();

                var cardTitle = $("<h4>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var card = $("<div>").addClass("today-card");
                var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                var temp = $("<p>").addClass("temp").text("Temperature: " + data.main.temp + " °F");
                var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                var windSpeed = $("<p>").addClass("wind-speed").text("Wind Speed: " + data.wind.speed + " MPH");
                var cardBody = $("<div>").addClass("card-body");

                cardTitle.append(icon);
                cardBody.append(cardTitle, temp, humidity, windSpeed);
                card.append(cardBody);
                $("#current-weather").append(card);
            }
        })
    }

    // url:"https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
    // ^may need an & before lat

    // <p class="uv-index">UV Index: </p>

    // for UV:
    //         Server response format
    //         lat --> float - latitude for returned data 
    //         lon --> float - longitude for returned data 
    //         date_iso --> string - date and time corresponding to returned date 
    //         date --> integer - ISO 8601 timestamp 
    //         value --> float - ultraviolet index


    // url:"https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey 




    // WHEN I search for a city I am presented with current and future conditions for that city and that city is added to the search history


    //    UV index



    // WHEN I view the UV index I am presented with a color that indicates whether the conditions are favorable, moderate, or severe



    // I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity



    // WHEN I click on a city in the search history I am again presented with current and future conditions for that city



    // WHEN I open the weather dashboard I am presented with the last searched city forecast


});