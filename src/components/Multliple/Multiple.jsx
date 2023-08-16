import React from 'react'
import ReactPlayer from 'react-player'
import './Multiple.css'
const videos = [
    {
        id : "1",
        video : "https://youtu.be/98y83GscKEI"
    },
    {
        id : "1",
        video : "https://youtu.be/NEM_SX0fCEA"
    },
    {
        id : "1",
        video : "https://youtu.be/wlC_eFbxwDo"
    }

]

const Multiple = () => {
  return (
    <div className='muliple-videos'>
        {videos.map(each => (
            <ReactPlayer url={each.video}
                width="660px"
                height='300px'
                controls="true"
            />
        ))}

          
    </div>
  )
}

export default Multiple
