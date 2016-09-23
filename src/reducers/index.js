import { combineReducers } from 'redux';
import companies from './companyReducer';
import characters from './characterReducer';

const rootReducer = combineReducers({
    companies,
    characters
});

export default rootReducer;
