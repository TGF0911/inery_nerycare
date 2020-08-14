import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'

import './styles.css'

//Ver como fazer o sidebar

const SideBar: React.FC = () => {
  return (
    <div className="container-sidebar">

      <button className="side-bar">
        <IoMdArrowRoundBack size={20} />
      </button>

      <div className="separator">

      </div>
    </div>
  )

  //Separator
  //IconButton
  //ServerButton isHome (Vai ser sempre a foto de perfil)
  //IconNotification hasNotification 
  // (sempre com icone de notificação, terá a mesma função das metions)

}

export default SideBar;