import React from 'react'
import MyBar from '../barchart/MyBar'
import Areachart from '../areachart/Areachart'
 

const Chartscontainer = () => {
  return (
    <div style={{display:`flex`, justifyContent:`space-between`, padding:`1rem`}}>
      <MyBar></MyBar>
      <Areachart></Areachart>


       
    </div>
  )
}

export default Chartscontainer