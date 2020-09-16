## Weather Dashboard

The goal of this project was to build a weather dashboard that This app runs in the browser and features dynamically updated HTML and CSS..  The OpenWeather API (https://openweathermap.org/api) was used to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

### How It Works:

**WHEN I search for a city I am presented with current and future conditions for that city and that city is added to the search history

**Current weather conditions for that city include the city name, date, icon, temperature, humidity, wind speed, and UV index

**WHEN I view the UV index I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

**I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

**WHEN I click on a city in the search history I am again presented with current and future conditions for that city

**WHEN I open the weather dashboard I am presented with the last searched city forecast

----------------------------------------------------------------------------------------------------------------------------------------




WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
USER CAN SEARCH FOR WEATHER REPORTS BY CITY USING THE OPENWEATHERMAP API

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, , 
THE FOLLOWING INFORMATION IS DISPLAYED: CURRENT TEMPERATURE, CURRENT HUMIDITY, WINDSPEED, UV INDEX, AND 5 DAY FORECAST

APPLICATION USES ICONS TO REPRESENT WEATHER CONDITIONS(an icon representation of weather conditions)


WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
APPLICATION STORES PREVIOUSLY SEARCHED FOR CITIES IN LOCAL STORAGE AND DISPLAYS THEM TO THE USER


WHEN I open the weather dashboard THEN I am presented with the last searched city forecast
APPLICATION LOADS LAST SEARCHED CITY FORECAST ON PAGE LOAD


https://adt315.github.io/weather-dashboard/
