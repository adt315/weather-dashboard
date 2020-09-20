
var lat;
var lon;

$(document).ready(function () {

    $("#search-btn").on("click", function () {
        var searchValue = $("#city-search").val();
        $("#city-search").val(""); //clear search field
        function storeCities() {
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

                lat = data.coord.lat;
                lon = data.coord.lon;

                cardTitle.append(icon);
                cardBody.append(cardTitle, temp, humidity, windSpeed, uvIndex);
                card.append(cardBody);
                $("#current-weather").append(card);
            }
        })
    }


    function getUV() {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=a468ca0d8bd9b0455127f58ae98ac8b8&lat=" + lat + "&lon=" + lon,
            success: function (value) {
                console.log(value);
            },
            error: function () {
                console.log("text failed");
            }
        })
    }
    getUV();

    
    function getForecast(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial",
            success: function (data) {
                console.log(data);
                $(".card-title-1").text(data.list[7].dt_txt); //splice
                var icon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png");
                // 
                var cardTitle1 = $(".card-title-1")
                cardTitle1.append(icon1);
                $(".temp-1").text("Temp: " + data.list[0].main.temp + "°F");
                $(".humidity-1").text("Humidity: " + data.list[0].main.humidity + "%");

                $(".card-title-2").text(data.list[15].dt_txt);
                var icon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png");
                var cardTitle2 = $(".card-title-2")
                cardTitle2.append(icon2);
                $(".icon-2").text("icon");
                $(".temp-2").text("Temp: " + data.list[1].main.temp + "°F");
                $(".humidity-2").text("Humidity: " + data.list[1].main.humidity + "%");

                $(".card-title-3").text(data.list[23].dt_txt);
                var icon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png");
                var cardTitle3 = $(".card-title-3")
                cardTitle3.append(icon3);
                $(".temp-3").text("Temp: " + data.list[2].main.temp + "°F");
                $(".humidity-3").text("Humidity: " + data.list[2].main.humidity + "%");

                $(".card-title-4").text(data.list[31].dt_txt);
                var icon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png");
                var cardTitle4 = $(".card-title-4")
                cardTitle4.append(icon4);
                $(".temp-4").text("Temp: " + data.list[3].main.temp + "°F");
                $(".humidity-4").text("Humidity: " + data.list[3].main.humidity + "%");

                $(".card-title-5").text(data.list[39].dt_txt);
                var icon5 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + ".png");
                var cardTitle5 = $(".card-title-5")
                cardTitle5.append(icon5);
                $(".temp-5").text("Temp: " + data.list[4].main.temp + "°F");
                $(".humidity-5").text("Humidity: " + data.list[4].main.humidity + "%");
            }
        })
    }
});
