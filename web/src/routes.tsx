import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import DoctorForm from './pages/DoctorFrom';
import PacientForm from './pages/PacientForm';
import SideBar from './components/SideBar';



function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Logon}/>
      <Route path ="/doctor-form" component={DoctorForm} />
      <Route path="/pacient-form" component={PacientForm} />
      <Route path="/button" component={SideBar} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;