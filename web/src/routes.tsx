import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import DoctorForm from './pages/DoctorFrom';



function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Logon}/>
      <Route path = "/doctor-form" component={DoctorForm} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;