$(document).ready(function () {

    //localStorage.clear();
    var lastSearchedCity = localStorage.getItem(localStorage.key(0));
    weatherSearch(lastSearchedCity); //passes an actual variable searchValue

    $("#search-btn").on("click", function () {
        var searchValue = $("#city-search").val();
        $("#city-search").val(""); //clear search field
        weatherSearch(searchValue); //passes an actual variable searchValue
    });

    $(".city-btn").on("click", function () {
        var selectedCity = $(this).attr("city-name");

        console.log("City Button Press");

        weatherSearch(selectedCity); //passes an actual variable searchValue
        getForecast(selectedCity);
    });

    function getMyCities() {
        console.log("Storage Length " + localStorage.length);

        $("#cities-list").empty();
        for (i = 0; i < localStorage.length; i++) {
            var myCities = localStorage.getItem(localStorage.key(i));

            console.log(myCities);

            var citySearchList = $("<button>");
            citySearchList.addClass("city-btn").attr("city-name", myCities).text(myCities);
            $("#cities-list").append(citySearchList);
        }
    }

    function weatherSearch(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial"
        }).done(function (data) {
            console.log(data);

            $("#current-weather").empty();
            localStorage.setItem(searchValue, searchValue);
            getForecast(searchValue);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            getUV(lat, lon, data);
            getMyCities();
        });
    }

    function getForecast(searchValue) {  //this searchValue is a placeholder
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=a468ca0d8bd9b0455127f58ae98ac8b8&units=imperial"
        }).then(function (data) {
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
        });
    }

    function getUV(lat, lon, data) {
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=a468ca0d8bd9b0455127f58ae98ac8b8&lat=" + lat + "&lon=" + lon
        }).done(function (uvData) {
            console.log(uvData);
            console.log(uvData.value);

            var cardTitle = $("<h4>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
            var card = $("<div>").addClass("today-card");
            var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            var temp = $("<p>").addClass("temp").text("Temperature: " + data.main.temp + " °F");
            var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
            var windSpeed = $("<p>").addClass("wind-speed").text("Wind Speed: " + data.wind.speed + " MPH");
            var uvIndex = $("<p>").addClass("uv-index").text("UV Index: " + uvData.value);

            if (uvData.value < 3) {
                uvIndex.addClass("favorable");
            }
            if (3 >= uvData.value >= 7) {
                uvIndex.addClass("moderate");
            }
            if (uvData.value > 7) {
                uvIndex.addClass("severe");
            }

            var cardBody = $("<div>").addClass("card-body");
            cardTitle.append(icon);
            cardBody.append(cardTitle, temp, humidity, windSpeed, uvIndex);
            card.append(cardBody);
            $("#current-weather").append(card);
        });
    }
});