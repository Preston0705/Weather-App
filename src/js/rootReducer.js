import { combineReducers } from 'redux';
import SearchReducer from './components/Search/searchReducer';
import HistoryReducer from './components/History/historyReducer';

const rootReducer = combineReducers({
    search: SearchReducer,
    history: HistoryReducer
// add reducers
});

export default rootReducer;
