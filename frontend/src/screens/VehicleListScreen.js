import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVehicle, listVehicles } from '../actions/vehicleActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { VEHICLE_DELETE_RESET } from '../constants/vehicleConstants';



export default function VehicleListScreen()  {
    const dispatch = useDispatch();
    const vehicleList = useSelector((state) => state.vehicleList);
    const {loading, error, vehicles} = vehicleList;
    const vehicleDelete = useSelector((state) => state.vehicleDelete);
    const {loading: dltloading, error: dlterror, success: dltsuccess} = vehicleDelete;

    const deleteHandler = (vehicle) =>{
        if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteVehicle(vehicle._id));
        }
    }

    useEffect(() => {
        if(dltsuccess){
            dispatch({type: VEHICLE_DELETE_RESET});            
        }
        dispatch(listVehicles());        
    }, [dispatch, dltsuccess]);

   
  return (
    <div>
        <h1>Vehicle List</h1>

        {dltloading && <Loading></Loading>}
        {dlterror && <Message variant="danger">{dlterror}</Message>} 

         {loading ? (
            <Loading></Loading>
        ) : error ? (
            <Message variant="danger">{error}</Message>
        ) : (
        <table>
            <thead>
                <tr>
                    <th>Image</th>                    
                    <th>Vehicle Model</th>
                    <th>Year</th>
                    <th>Transmission</th>
                    <th>Fuel Type</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map((vehicle) =>(
                    <tr key={vehicle._id}>
                        <td><img src={vehicle.imag} className="card-img-top" alt={vehicle.vehicleModel} /></td>
                        <td>{vehicle.vehicleModel}</td>
                        <td>{vehicle.year}</td>
                        <td>{vehicle.transmission}</td>
                        <td>{vehicle.fuelType}</td>
                        <td>{vehicle.price}</td>
                        <td>
                            <button type="button" className='' onClick={() => deleteHandler(vehicle)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}           
            </tbody>
        </table>
        )}      
    </div>
  )
}
