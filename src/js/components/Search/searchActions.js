import axios from 'axios';

export const types = {
    GET_WEATHER: 'GET_WEATHER',
    UPDATE_CITY: 'UPDATE_CITY'
};

export function getWeather(city) {
    return {
        type: types.GET_WEATHER,
        payload: axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d7d81ed19993100a8dba474c3c5bf61a')
                      .then(results => results.data)
                      .catch(err => console.log(err))
    };
}

export function updateCity(city) {
    return {
        type: types.UPDATE_CITY,
        payload: {
            city: city
        }
    };
}