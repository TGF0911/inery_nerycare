import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import DoctorForm from './pages/DoctorFrom';
import PacientForm from './pages/PacientForm';



function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Logon}/>
      <Route path ="/doctor-form" component={DoctorForm} />
      <Route path="/pacient-form" component={PacientForm} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;