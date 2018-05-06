import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        temperature: store.search.temperature,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        lowTemp: store.search.lowTemp,
        highTemp: store.search.highTemp,
        windSpeed: store.search.windSpeed,
        icon: store.search.icon,
        selectedCity: store.search.selectedCity,
        displayedCity: store.search.displayedCity,
        lat: store.search.lat,
        lon: store.search.lon
    };
};

export default connect(mapStoreToProps)(Search);