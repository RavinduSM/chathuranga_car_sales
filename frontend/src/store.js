import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { registerReducer, signinReducer } from './reducers/userReducers';
import { vehicleListReducer } from "./reducers/vehicleReducers";

const initialState = {
    userSignin: {
        userData: localStorage.getItem('userData')
        ? JSON.parse(localStorage.getItem('userData'))
        : null,
    },
};

const reducer = combineReducers({
    vehicleList: vehicleListReducer,
    userRegister: registerReducer,
    userSignin: signinReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;