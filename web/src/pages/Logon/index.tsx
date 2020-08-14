import React from 'react';

import hospitalImg from '../../../assets/hospital_logon.svg'
// import logoImg from '../../../assets/logo_inery.jpeg'

import './style.css'

function Logon() {
  return (
    <div className="page-landing">
      <div id="page-landing-content" className="container">
        {/* <div className="logo-container">
          <img src={logoImg} alt="iNery" />
        </div> */}
        <img src={hospitalImg} alt="Hospital" className="hospitalImg" />

        <div className='container-logon'>
          <section>
            <form>
              <h1>Faça seu Login</h1>
              <input type="type" placeholder="Seu ID" />
              <input type="password" placeholder="Sua senha" />
              <button className="button" type="submit">Entrar</button>
            </form>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Logon;