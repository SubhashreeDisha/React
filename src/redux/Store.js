import {combineReducers, legacy_createStore} from 'redux'
import countReducer from './Reducer'
import colorReducer from './Reducer1';


const rootReducer=combineReducers({countReducer,colorReducer})
const store =legacy_createStore(rootReducer)

export default store;