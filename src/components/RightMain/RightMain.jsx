import React from 'react'
import './RightMain.css'
import ReactPlayer from 'react-player'


const RightMain = ({value}) => {
  return (
    <div>

      <ReactPlayer 
          url={value}
          controls="true"
          height="550px"
      />
    </div>
  )
}

export default RightMain