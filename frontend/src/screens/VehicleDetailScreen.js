import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { detailsVehicles} from '../actions/vehicleActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function VehicleDetailScreen(props)  {
    const dispatch = useDispatch();

    const params = useParams();
    const { id: vehicleId} = params;
    
    const vehicleDetails = useSelector((state)=> state.vehicleDetails);
    const {loading, error, vehicle} = vehicleDetails;

    useEffect(() => {
        dispatch(detailsVehicles(vehicleId));
      }, [dispatch, vehicleId]);

  return (
    
    <div className='container'>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
          <div>               
              <div className="row">
                  <div className="col-12 col-sm-8">
                    <img src={vehicle.image} className="card-img-top" alt={vehicle.vehicleModel} />
                  </div>
                  <div className="col-12 col-sm-4">
                      
                  </div>
              </div>
          </div>
      )}
    </div>
      
  );
}


