import React from 'react'
import PageHeader from '../../components/PageHeader'
import hospitalImg from '../../assets/hospital.svg'

function HospitalHomePage() {
  return (
    <div id="page-hospital-home" className="contianer">
      <PageHeader 
      src = {hospitalImg}
      alt = "Hospital"
      title ="Bem-vindo Hospital"
      />

    {/* Side bai vem aq  */}

    <div className="doctors-list">
      <strong>Confira os médicos do seu hospital</strong>
    </div>

    </div>
  )
}

export default HospitalHomePage;