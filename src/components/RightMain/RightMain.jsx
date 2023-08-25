import React from 'react'
import './RightMain.css'
import ReactPlayer from 'react-player'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

// import videos from './videos/_import_60d962f06b3ef8.86089157_FPpreview.mp4'



const RightMain = ({value}) => {
  return (
    <div>
      {/* <Video>
        <source src='./videos/_import_60d962f06b3ef8.86089157_FPpreview.mp4' type='video/webm' />
      </Video> */}
      <ReactPlayer 
          //url="./videos/WhatsApp Video 2023-08-24 at 10.57.12 AM.mp4"
          url={value}
          controls="true"
          height="550px"
      />
    </div>
    // <div>
    //     <ReactPlayer 
    //     // url='https://youtu.be/wlC_eFbxwDo'
    //     // url="http://45.119.114.210/hls/hall1.m3u8"
    //     url="https://www.instagram.com/reel/CwPVqudphif/?igshid=MTc4MmM1YmI2Ng=="
    //      controls="true"
    //      height="550px"
    //      />
    //      {/* <video width="320" height="240" controls>
    //         <source src="movie.mp4" type="video/mp4">
    //         <source src="movie.ogg" type="video/ogg">
    //         Your browser does not support the video tag.
    //      </video> */}
    //      {/* <video
    //         src="http://45.119.114.210/hls/hall1.m3u8" /> */}
    //         <video>
    //           <source src='https://youtu.be/wlC_eFbxwDo' />
    //         </video>
    // </div>
  )
}

export default RightMain