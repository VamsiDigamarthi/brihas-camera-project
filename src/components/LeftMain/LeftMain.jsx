import React from 'react'
import './LeftMain.css'
import {BsCameraVideo} from 'react-icons/bs'

const values = [
    {
        id : "1",
        url:"http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
    },
    {
        id : "1",
        url:"http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
    },
    {
        id : "1",
        url:"http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8",
    },
    {
        id : "1",
        url:"http://nasatv-lh.akamaihd.net/i/NASA_101@319270/index_1000_av-p.m3u8?sd=10&rebase=on",
    },
    {
        id : "1",
        url:"http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
    },
    {
        id : "1",
        url:"http://walterebert.com/playground/video/hls/sintel-trailer.m3u8",
    },
    {
        id : "1",
        url:"http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
    },
    {
        id : "1",
        url:"https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
    },
    {
        id : "1",
        url:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    },    {
        id : "1",
        url:"https://d1gnaphp93fop2.cloudfront.net/videos/multiresolution/rendition_new10.m3u8",
    },
    {
        id : "1",
        url:"https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8",

    },
    {
        id : "1",
        url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
    {
        id : "1",
        url:"https://diceyk6a7voy4.cloudfront.net/e78752a1-2e83-43fa-85ae-3d508be29366/hls/fitfest-sample-1_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8",

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
                        <div className='icons-camer-cards'>
                            <div>
                                <BsCameraVideo />
                            </div>
                        </div>                
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default LeftMain