import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom';

import './styles.css'

interface Props {
  title: string;
  description?: string;
  src: string;
  alt: string
}

const PageHeader: React.FC<Props> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/home'>
          <IoMdArrowRoundBack size={30} />
        </Link>
        <img src={props.src} alt={props.alt} />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader;