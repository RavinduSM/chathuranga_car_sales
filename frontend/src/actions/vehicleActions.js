import Axios from "axios";
import { VEHICLE_DELETE_FAIL, VEHICLE_DELETE_REQUEST, VEHICLE_DELETE_SUCCESS, VEHICLE_LIST_FAIL, VEHICLE_LIST_REQUEST, VEHICLE_LIST_SUCCESS , VEHICLE_DETAIL_REQUEST, VEHICLE_DETAIL_SUCCESS, VEHICLE_DETAIL_FAIL} from "../constants/vehicleConstants"

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

export const detailsVehicles = (vehicleId) => async (dispatch) => {
    dispatch({ type: VEHICLE_DETAIL_REQUEST, payload: vehicleId });    
    try {
      const { data } = await Axios.get(`/api/vehicles/${vehicleId}`);
      dispatch({ type: VEHICLE_DETAIL_SUCCESS, payload: data });
    } catch (error) {          
        dispatch({ type: VEHICLE_DETAIL_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,  });
      }
    };

export const deleteVehicle = (vehicleId) => async (dispatch) => {
    dispatch({ type: VEHICLE_DELETE_REQUEST, payload: vehicleId });    
    try {
      const { data } = await Axios.delete(`/api/vehicles/${vehicleId}`);
      dispatch({ type: VEHICLE_DELETE_SUCCESS });
    } catch (error) {          
        dispatch({ type: VEHICLE_DELETE_FAIL, payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,  });
      }
    };