function get_weather() {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            'zip': 97232,
            'APPID': '81b7081a2986ea212871c64f4ddcad8b',
            'units': 'imperial',
        },
        success: function (response){
            var weatherIcon = document.getElementById('weatherIcon').src ="http://openweathermap.org/img/w/"+response.weather[0].icon+".png";
            var temperature = response.main.temp;
            var weatherDescription = response.weather[0].description;
            var humidity = response.main.humidity;
            $('#humidity').text(humidity);
            $('#temperature').text(temperature);
            $('#weatherDescription').text(weatherDescription);
            $('#weatherIcon').text(weatherIcon);
        },
    });
}
get_weather()
  
  
  
  
  
  
  
  
  
  
  
  
  
  