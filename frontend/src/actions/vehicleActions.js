import Axios from "axios";
import { VEHICLE_LIST_FAIL, VEHICLE_LIST_REQUEST, VEHICLE_LIST_SUCCESS } from "../constants/vehicleConstants"

export const listVehicles = () => async(dispatch) => {
    dispatch({
        type: VEHICLE_LIST_REQUEST,
    });
    try{
        const{data} = await Axios.get('/api/vehicles');
        dispatch({type: VEHICLE_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch ({ type: VEHICLE_LIST_FAIL, payload: error.message});
    }
};