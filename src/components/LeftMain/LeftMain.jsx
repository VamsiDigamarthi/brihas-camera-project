import React from 'react'
import './LeftMain.css'
import {BsCameraVideo} from 'react-icons/bs'

const values = [
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },
    {
        id : "1"
    },

]

const LeftMain = () => {
  return (
    <div className='left-main-container'>
        <div className='total-card'>
            <p>Total : 2</p>
            <p>online :3</p>
            <p>offline : 9</p>
        </div>
        <div className='all-cameras-card-container'>
            {values.map((each) => (
                <div className='camera-cards'>
                <div className='dt-at-card'>
                    <span>DT <span>Hyderbad</span></span>
                    <span>PS No <span>3</span></span>
                </div>
                <div className='dt-at-card'>
                    <span>DT <span>Hyderbad</span></span>
                    <span>PS No <span>3</span></span>
                </div>
                <div className='icons-camer-cards'>
                    <div>
                        <BsCameraVideo />
                    </div>
                    <div>
                        <span>cid: <span>
                            HF#ign&&</span></span>
                        <span>demo ps :  <span>
                            Hight</span></span>
                    </div>
                </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default LeftMain