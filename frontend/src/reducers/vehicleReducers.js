import { VEHICLE_DELETE_FAIL, VEHICLE_DELETE_REQUEST, VEHICLE_DELETE_RESET, VEHICLE_DELETE_SUCCESS, VEHICLE_DETAIL_FAIL, VEHICLE_DETAIL_REQUEST, VEHICLE_DETAIL_SUCCESS, VEHICLE_LIST_FAIL, VEHICLE_LIST_REQUEST, VEHICLE_LIST_SUCCESS } from "../constants/vehicleConstants";

export const vehicleListReducer = (state = {loading: true, vehicles: [] }, action) =>{
    switch(action.type){
        case VEHICLE_LIST_REQUEST:
            return {loading: true};
        case VEHICLE_LIST_SUCCESS:
            return {loading: false, vehicles: action.payload};
        case VEHICLE_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const vehicleDetailsReducer = (state = { loading: true }, action) =>{
  switch(action.type){
      case VEHICLE_DETAIL_REQUEST:
          return {loading: true};
      case VEHICLE_DETAIL_SUCCESS:
          return {loading: false, vehicle: action.payload};
      case VEHICLE_DETAIL_FAIL:
          return {loading: false, error: action.payload};
      default:
          return state;
  }
}

export const vehicleDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case VEHICLE_DELETE_REQUEST:
        return { loading: true };
      case VEHICLE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case VEHICLE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case VEHICLE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };