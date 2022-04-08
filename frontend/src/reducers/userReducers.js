import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT } from "../constants/userConstants";

export const signinReducer = (state = {}, action) => {
    switch(action.type){
        case SIGNIN_REQUEST:
            return {loading: true};
        case SIGNIN_SUCCESS:
            return {loading: false, userData: action.payload};
        case SIGNIN_FAIL:
            return {loading: false, error: action.payload};
        case SIGNOUT:
            return {};
        default:
            return state;
    }
};

export const registerReducer = (state = {}, action) => {
switch(action.type){
    case REGISTER_REQUEST:
        return {loading: true};
    case REGISTER_SUCCESS:
        return {loading: false, userData: action.payload};
    case REGISTER_FAIL:
        return {loading: false, error: action.payload};       
    default:
        return state;
}
};
