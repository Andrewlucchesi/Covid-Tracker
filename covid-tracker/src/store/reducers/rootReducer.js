import reportReducer from './reportReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    report: reportReducer
});

export default rootReducer
