import React from 'react'
import Chartscontainer from '../chartscontainer/Chartscontainer'
import Progress from '../progress/Progress'
import Recom from '../Recomendations/Recom'

const Optiondash = () => {
  return (
    <div style={{width:`100%` , background: `#F5F5F5`}}>
      <Progress></Progress>
      <Chartscontainer></Chartscontainer>
      <Recom></Recom>


    </div>
  )
}

export default Optiondash