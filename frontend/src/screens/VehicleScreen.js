import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listVehicles } from '../actions/vehicleActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Vehicles from '../components/Vehicles';


export default function VehicleScreen() {
    const dispatch = useDispatch();
    const vehicleList = useSelector((state) => state.vehicleList);
    const {loading, error, vehicles} = vehicleList;

  useEffect(() => {
    dispatch(listVehicles());
  }, [dispatch])
  return (
    <div>
      { loading ? (
        <Loading/>
      ): error ?
      (<Message variant="danger">{error}</Message>
      ):(
        <div className="row">          {
              vehicles.map((vehicle) => (
                <Vehicles key={vehicle.id} vehicle={vehicle}/>
              ))
          }
        </div>
      )
      }
    </div>  
  );
}

 