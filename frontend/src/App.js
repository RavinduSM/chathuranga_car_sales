import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VehicleScreen from './screens/VehicleScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/vehicles' element={<VehicleScreen/>} />
      <Route path='/signin' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen/>} />
    </Routes>
  );
}

export default App;
