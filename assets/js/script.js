var apiKey = "9f952a484bb0642f0030c770704f46cd";
var apiUrlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=pasadena&appid=" + apiKey;
var apiUrlOneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=29.6911&lon=-95.2091&appid=" + apiKey;

var getApiCurrent = function() {
    fetch(apiUrlCurrent)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
};

var getApiOneCall = function() {
    fetch(apiUrlOneCall)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
};

getApiCurrent();
getApiOneCall();