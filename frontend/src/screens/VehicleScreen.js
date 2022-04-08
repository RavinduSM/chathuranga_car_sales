import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listVehicles } from '../actions/vehicleActions';
import Loading from '../components/Loading';
import Message from '../components/Message';
import Vehicles from '../components/Vehicles';
import imgbanner from '../a.jpg'


export default function VehicleScreen() {
    const dispatch = useDispatch();
    const vehicleList = useSelector((state) => state.vehicleList);
    const {loading, error, vehicles} = vehicleList;

  useEffect(() => {
    dispatch(listVehicles());
  }, [dispatch])
  return (
    <div className='container'>
      { loading ? (
        <Loading/>
      ): error ?
      (<Message variant="danger">{error}</Message>
      ):(
        <div className="row">      
         <img src={imgbanner} />   
          {
              vehicles.map((vehicle) => (
                <Vehicles key={vehicle._id} vehicle={vehicle}/>
              ))
          }
        </div>
      )
      }
    </div>  
  );
}

 