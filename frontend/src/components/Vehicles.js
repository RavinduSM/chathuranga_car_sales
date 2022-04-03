import React from 'react';
import {Link} from 'react-router-dom';


export default function Vehicles(props) {
    const {vehicle} = props;
  return (
    <div className="row row-cols-1 row-cols-md-3" >
           <div key={vehicle.id} className="col">
               <div className="row g-0">
                <div className="card">
                    <a href={`/vehicle/${vehicle.id}`}>
                            <img src={vehicle.image} className="card-img-top" alt={vehicle.vehicleModel} />
                    </a>     
                    <div class="card-body">
                        <a href={`/vehicle/${vehicle.id}`}>
                            <h2 className="card-title text-decoration-none">{vehicle.vehicleModel}</h2>                            
                        </a> 
                        <p class="card-text">{vehicle.price}</p>
                        <p class="card-text">{vehicle.bodyType}</p>
                    </div>                             
                </div>              
            </div>
            </div>
      </div>
  );
}


