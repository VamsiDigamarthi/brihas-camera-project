
import React from 'react'
import './Header.css'
import {BsBrush} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <h3>
                Live Streaming of Telangana Assembly Election 2024-Demo
            </h3>
            {/* <div className="header-icons">
                <BsBrush />
                <AiOutlineUser />
            </div> */}
        </div>
    </div>
  )
}

export default Header
