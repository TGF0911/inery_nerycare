import React from 'react';
import {IoMdArrowRoundBack} from 'react-icons/io'
import './styles.css'

export interface Props{
  selected ?: boolean;
  isHome?: boolean;
  hasNotications ?:boolean;
  mentions ?: number;
}


const SideBarIcon : React.FC<Props> = ({selected, isHome, hasNotications, mentions}) => {
  return (
    <button className="side-bar">
      <IoMdArrowRoundBack size={20} />
    </button>
  )
}

export default SideBarIcon