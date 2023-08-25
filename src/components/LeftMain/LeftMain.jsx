import React from 'react'
import './LeftMain.css'
import {BsCameraVideo} from 'react-icons/bs'

const values = [
    {
        id : "1",
        url:"https://youtu.be/AsvGScyj4gw?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/VutF0FpL4Pw?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/98y83GscKEI?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/aVCjIV6YGoI?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/AsvGScyj4gw?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/aVCjIV6YGoI?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/aVCjIV6YGoI?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/AsvGScyj4gw?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/VutF0FpL4Pw?feature=shared",
    },    {
        id : "1",
        url:"https://youtu.be/aVCjIV6YGoI?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/VutF0FpL4Pw?feature=shared",

    },
    {
        id : "1",
        url:"https://youtu.be/AsvGScyj4gw?feature=shared",
    },
    {
        id : "1",
        url:"https://youtu.be/VutF0FpL4Pw?feature=shared",

    },

] 






const LeftMain = ({videosLink}) => {
  return (
    <div className='left-main-container'>
        <div className='total-card'>
            <p>Total : 2</p>
            <p>online :3</p>
            <p>offline : 9</p>
        </div>
        <div className='all-cameras-card-container'>
            {values.map((each, key) => (
                <div key={key} className='camera-cards' onClick={() => videosLink(each)}>
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