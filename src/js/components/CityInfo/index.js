import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
        city: store.search.displayedCity,
        icon: store.search.icon,
        lat: store.search.lat,
        lon: store.search.lon,
        temperature: store.search.temperature,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        lowTemp: store.search.lowTemp,
        highTemp: store.search.highTemp,
        windSpeed: store.search.windSpeed,
        error: store.search.error,
        firstRender: store.search.firstRender,
        pending: store.search.pending
    };
}

export default connect(mapStoreToProps)(CityInfo);