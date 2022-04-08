import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { registerReducer, signinReducer } from './reducers/userReducers';
import { vehicleDeleteReducer, vehicleDetailsReducer, vehicleListReducer } from "./reducers/vehicleReducers";
import {sendMessageReducer} from "./reducers/messageReducers"

const initialState = {
    // userSignin: {
    //     userData: localStorage.getItem('userData')
    //     ? JSON.parse(localStorage.getItem('userData'))
    //     : null,
    // },
};

const reducer = combineReducers({
    vehicleList: vehicleListReducer,
    vehicleDetails: vehicleDetailsReducer,
    userRegister: registerReducer,
    userSignin: signinReducer,
    vehicleDelete: vehicleDeleteReducer,
    messageSend: sendMessageReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;