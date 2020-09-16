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












});