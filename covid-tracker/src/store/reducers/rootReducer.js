import reportReducer from './reportReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  report: reportReducer,
  firestore: firestoreReducer
});

export default rootReducer
