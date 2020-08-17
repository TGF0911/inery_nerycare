import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

import './styles.css'

//Ver como fazer o sidebar

const SideBar: React.FC = () => {


  return (
    <div className="container-sidebar">
      
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>

        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>

        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>
        <Link to="/doctor-form" className="side-bar">
          <IoMdArrowRoundBack />
        </Link>

    </div>
  )

  //Separator
  //IconButton
  //ServerButton isHome (Vai ser sempre a foto de perfil)
  //IconNotification hasNotification 
  // (sempre com icone de notificação, terá a mesma função das metions)

}

export default SideBar;