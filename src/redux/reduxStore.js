import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
});

let store = createStore(reducers);

export default store;