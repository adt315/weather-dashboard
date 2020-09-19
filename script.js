// My API Key:
// a468ca0d8bd9b0455127f58ae98ac8b8


// coord.lat (latitude)
// coord.lon (longitude)

// For 5 DAY FORECAST:


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
        function storeCities(){
            myCities = [];
            myCities.push(searchValue);
            localStorage.setItem(myCities, JSON.stringify(myCities));
            // console.log(myCities);
        }
        storeCities();
        weatherSearch(searchValue); //passes an actual variable searchValue
        getForecast(searchValue);
        getMyCities();
    });


        function getMyCities() {
            for (i = 0; i < localStorage.length; i++) {
            myCities = JSON.parse(localStorage.getItem(localStorage.key(i)));

          console.log(myCities);
                  $(".list-group-item").text(myCities[i]);  
    // //         var li = document.createElement("li");
    // //         li.textContent = Object.values(myCities);

                 }
     }
    




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
                $(".card-title-1").text(data.list[7].dt_txt); //splice
                // var icon = $(".icon-1").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                $(".icon-1").text("icon");
                $(".temp-1").text("Temp: " + data.list[0].main.temp + "°F");
                $(".humidity-1").text("Humidity: " + data.list[0].main.humidity + "%");

                $(".card-title-2").text(data.list[15].dt_txt);
                $(".icon-2").text("icon");
                $(".temp-2").text("Temp: " + data.list[1].main.temp + "°F");
                $(".humidity-2").text("Humidity: " + data.list[1].main.humidity + "%");

                $(".card-title-3").text(data.list[23].dt_txt);
                $(".icon-3").text("icon");
                $(".temp-3").text("Temp: " + data.list[2].main.temp + "°F");
                $(".humidity-3").text("Humidity: " + data.list[2].main.humidity + "%");

                $(".card-title-4").text(data.list[31].dt_txt);
                $(".icon-4").text("icon");
                $(".temp-4").text("Temp: " + data.list[3].main.temp + "°F");
                $(".humidity-4").text("Humidity: " + data.list[3].main.humidity + "%");

                $(".card-title-5").text(data.list[39].dt_txt);
                $(".icon-5").text("icon");
                $(".temp-5").text("Temp: " + data.list[4].main.temp + "°F");
                $(".humidity-5").text("Humidity: " + data.list[4].main.humidity + "%");
            }
        })
    }


});