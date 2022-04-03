import { Axios } from "axios";
import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch ({type: SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userData', JSON.stringify(data));
    }catch (error) {
        dispatch({
            type: SIGNIN_FAIL,
            payload: error.message,
        });
    }
};

export const register = (username, email, telephone, password, isCustomer) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST, payload: {username, email, telephone, password, isCustomer}});
    try{
        const {data} = await Axios.post('/api/users/register', {username, email, telephone, password, isCustomer});
        dispatch ({type: REGISTER_SUCCESS, payload: data});
        dispatch ({type: SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userData', JSON.stringify(data));
    }catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.message,
        });
    }
};
