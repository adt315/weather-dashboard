// My API Key:
// a468ca0d8bd9b0455127f58ae98ac8b8


// coord.lat (latitude)
// coord.lon (longitude)

// For 5 DAY FORECAST:
// sys.dt_txt	(Data/time)

   // for UV:
    //         Server response format
    //         lat --> float - latitude for returned data 
    //         lon --> float - longitude for returned data 
    //         date_iso --> string - date and time corresponding to returned date 
    //         date --> integer - ISO 8601 timestamp 
    //         value --> float - ultraviolet index


$(document).ready(function () {

    $("#search-btn").on("click", function () {
        var searchValue = $("#city-search").val();
        $("#city-search").val(""); //clear search field
        weatherSearch(searchValue); //passes an actual variable searchValue
        getForecast(searchValue);
    });

    function weatherSearch(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial",
            success: function (data) {
                console.log(data);

                $("#current-weather").empty();

                var cardTitle = $("<h4>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                var card = $("<div>").addClass("today-card");
                var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                var temp = $("<p>").addClass("temp").text("Temperature: " + data.main.temp + " °F");
                var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                var windSpeed = $("<p>").addClass("wind-speed").text("Wind Speed: " + data.wind.speed + " MPH");
                var uvIndex = $("<p>").addClass("uv-index").text("UV Index: ");
                var cardBody = $("<div>").addClass("card-body");

                cardTitle.append(icon);
                cardBody.append(cardTitle, temp, humidity, windSpeed, uvIndex);
                card.append(cardBody);
                $("#current-weather").append(card);
            }
        })
    }

    // url:"https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
    // ^may need an & before lat

    // <p class="uv-index">UV Index: </p>


    function getForecast(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial",
            success: function (data) {
                console.log(data);
                $(".card-title-1").text("1 ");
                $(".icon-1").text("2 ");
                $(".temp-1").text("Temp: ");
                $(".humidity-1").text("Humidity: ");

                $(".card-title-2").text("1 ");
                $(".icon-2").text("2 ");
                $(".temp-2").text("Temp: ");
                $(".humidity-2").text("Humidity: ");

                $(".card-title-3").text("1 ");
                $(".icon-3").text("2 ");
                $(".temp-3").text("Temp: ");
                $(".humidity-3").text("Humidity: ");

                $(".card-title-4").text("1 ");
                $(".icon-4").text("2 ");
                $(".temp-4").text("Temp: ");
                $(".humidity-4").text("Humidity: ");

                $(".card-title-5").text("1 ");
                $(".icon-5").text("2 ");
                $(".temp-5").text("Temp: ");
                $(".humidity-5").text("Humidity: ");
            }
        })
    }    
       

});