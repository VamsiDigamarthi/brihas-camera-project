import React, { useState } from 'react'
import LeftMain from '../LeftMain/LeftMain'
import RightMain from '../RightMain/RightMain'
import './Main.css'



// const arrey=[
//   {
//   name:"Ravi",
//   url:"https://youtu.be/AsvGScyj4gw?feature=shared",
//   address:"Hyd"
//   },{
//     name:"Raju",
//     url:"https://youtu.be/VutF0FpL4Pw?feature=shared",
//     address:"SSB"
//   }
//   ,{
//     name:"Vamsi",
//     url:"https://youtu.be/98y83GscKEI?feature=shared",
//     address:"Bhl"
//   },{
//     name:"Akhil",
//     url:"https://youtu.be/aVCjIV6YGoI?feature=shared",
//     address:"ts"
//   }]


const Main = () => {

  const [value, setValue] = useState([])

  const videosLink = (each) => {
    setValue(each.url);
  }

  console.log(value)

  return (
    <div className='main-container-main'>
        <LeftMain videosLink={videosLink} />
        <RightMain value={value} />

    </div>
  )
}

export default Main
