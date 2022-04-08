import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import imgbanner from '../v3.jpg'
import { detailsVehicles } from '../actions/vehicleActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function DetailsScreen(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const { id: vehicleId} = params;
    const vehicleDetails = useSelector((state)=> state.vehicleDetails);
    const {loading, error, vehicle} = vehicleDetails;

    useEffect(() =>{
        dispatch(detailsVehicles(vehicleId));
    }, [dispatch, vehicleId]);
  return (
      <div>
          {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
    <div className='container'>
      
      <div className="row">
            <div className="col-12 col-sm-8">
            <img src={imgbanner}  />
            </div>
            <div className="col-12 col-sm-4">
                <h1 className='text-center'>{vehicle.vehicleModel}</h1>
                <p className='fs-2 text-danger fw-bold'>Rs {vehicle.price}</p>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <p className='fs-5'>Year</p>
                                <p className='fs-5'>Model</p>
                                <p className='fs-5'>Body Type</p>
                                <p className='fs-5'>Mileage</p>
                                <p className='fs-5'>Transmission</p>
                                <p className='fs-5'>Drive train</p>
                                <p className='fs-5'>Engine</p>
                                <p className='fs-5'>Fuel Type</p>
                                <p className='fs-5'>Fuel Economy</p>
                                <p className='fs-5'>Trim</p>
                                <p className='fs-5'>Exterior color</p>
                                <p className='fs-5'>Interior color</p>
                                <p className='fs-5'>Stock number</p>                                
                            </div>
                            <div className="col-6">
                                <p className='fs-5'>{vehicle.year}</p>
                                <p className='fs-5'>{vehicle.vehicleModel}</p>
                                <p className='fs-5'>{vehicle.bodyType}</p>
                                <p className='fs-5'>{vehicle.mileage}</p>
                                <p className='fs-5'>{vehicle.transmission}</p>
                                <p className='fs-5'>{vehicle.drivetrain}</p>
                                <p className='fs-5'>{vehicle.engine}</p>
                                <p className='fs-5'>{vehicle.fuelType}</p>
                                <p className='fs-5'>{vehicle.fuelEconomy}</p>
                                <p className='fs-5'>{vehicle.trim}</p>
                                <p className='fs-5'>{vehicle.exteriorColor}</p>
                                <p className='fs-5'>{vehicle.interiorColor}</p>
                                <p className='fs-5'>{vehicle.stockNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )}
    </div>
  );
}


