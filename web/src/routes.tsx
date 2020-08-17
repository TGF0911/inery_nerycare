import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import DoctorForm from './pages/DoctorFrom';
import PacientForm from './pages/PacientForm';
import SideBar from './components/SideBar';
import MedicalForm from './pages/MedicineForm';
// import HospitalHomePage from './pages/HospitalHomePage';
import TextChat from './components/TextChat';



function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Logon}/>
      <Route path ="/doctor-form" component={DoctorForm} />
      <Route path="/pacient-form" component={PacientForm} />
      <Route path="/button" component={SideBar} />
      <Route path="/new-medical" component={MedicalForm} />
      <Route path="/home" component={TextChat} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;