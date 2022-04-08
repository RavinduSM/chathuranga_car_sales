import React from 'react';
import {Link} from 'react-router-dom';


export default function Vehicles(props) {
    const {vehicle} = props;
  return (
    <div className="col-12 col-sm-4" >                
       <div key={vehicle._id} className="card  border-shadow rounded mb-3">
                    <Link to={`/vehicle/${vehicle._id}`}>
                            <img src={vehicle.image} className="card-img-top" alt={vehicle.vehicleModel} />
                    </Link>     
                    <div class="card-body">
                        <Link to={`/vehicle/${vehicle._id}`}>
                            <h2 className="card-title text-decoration-none">{vehicle.vehicleModel}</h2>                            
                        </Link> 
                        <p class="card-text">{vehicle.price}</p>
                        <p class="card-text">{vehicle.bodyType}</p>
                    </div>                             
                </div>      
  </div>
 
  );
}


