import {combineReducers} from 'redux';
import importReducer from "./importReducer";

const rootReducer = combineReducers({
    import: importReducer
})

export default rootReducer;