import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VehicleScreen from './screens/VehicleScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import VehicleListScreen from './screens/VehicleListScreen';
import VehicleDetailScreen from './screens/VehicleDetailScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsScreen from './screens/DetailsScreen';
import Contacts from './screens/Contact';


function App() {
  return (
    
    <switch>
    <Routes>
      <Route path='/' element={<HomeScreen/>} />      
      <Route path='/vehicle' element={<VehicleScreen/>} exact />
      <Route path='/contact' element={<Contacts/>} />  
      <Route path="/vehicle/:id" element={<DetailsScreen/>} />
      <Route path='/signin' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen/>} />
      <Route path='/vehicleList' element={<VehicleListScreen/>} />
    </Routes>
    </switch> 
  
  );
}

export default App;
