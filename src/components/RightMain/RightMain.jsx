import React from 'react'
import './RightMain.css'
import ReactPlayer from 'react-player'
const RightMain = () => {
  return (
    <div>
        <ReactPlayer url='https://youtu.be/wlC_eFbxwDo'
         controls="true"
         height="550px"
         />
    </div>
  )
}

export default RightMain