var $ = require('jquery/src/core');
require('jquery/src/ajax');
require('jquery/src/ajax/xhr');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=6bc3a8aa3c067ebd0ba2866bfa799979';
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: requestUrl
            })
                .done(function (result) {
                    if (result.count == 0) {
                        reject('City was not found');
                    } else {
                        resolve(result.list[0].main.temp);
                    }
                })
                .fail(function (xhr) {
                    reject(xhr.status + ': ' + xhr.statusText);
                });
        });
    }
};