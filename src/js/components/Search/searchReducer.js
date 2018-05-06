import { types } from './searchActions';

const INITIAL_STATE = {
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
    icon: '',
    selectedCity: '',
    displayedCity: '',
    lat: '',
    lon: '',
    noResult: false,
    firstRender: true,
    pending: false
};

function tempConvert(k) {
    return 9 / 5 * (k - 273) + 32;
};

export default function SearchReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case ('GET_WEATHER_FULFILLED'): {
            if (payload) {
                return {
                    ...state,
                    temperature: tempConvert(payload.main.temp).toFixed(2) + 'F',
                    pressure: payload.main.pressure,
                    humidity: payload.main.humidity + '%',
                    lowTemp: tempConvert(payload.main.temp_min).toFixed(2) + 'F',
                    highTemp: tempConvert(payload.main.temp_max).toFixed(2) + 'F',
                    windSpeed: payload.wind.speed + 'mph',
                    icon: payload.weather[0].icon,
                    selectedCity: '',
                    displayedCity: payload.name,
                    lat: payload.coord.lat,
                    lon: payload.coord.lon,
                    noResult: false,
                    firstRender: false,
                    pending: false
                };
            } else {
                return {
                    ...state,
                    noResult: true,
                    selectedCity: ''
                }
            }
            break;
        }

        case (types.GET_WEATHER + '_PENDING'): {
            return {
                ...state,
                pending: true
            };
            break;
        }

        case types.UPDATE_CITY: {
            return {
                ...state,
                selectedCity: payload.city
            };
            break;
        }

        default: {
            return state;
        }
    }
};