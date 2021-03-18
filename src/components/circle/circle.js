import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import './circle.css'

const Circle = (props) => {
  return (
    <div className='info'>
      <div className='circles'>
        <div id='circleInfected' className='circle'></div>
        <div id='circleDead' className='circle'></div>
        <br/>
        <div id='circleCured' className='circle'></div>
        <div id='circleActive' className='circle'></div>
      </div>

      <div className='textCircle'>
        <h2><CountUp start={0} end={props.data.Confirmed} duration={2} /> </h2>
        <h2><CountUp start={0} end={props.data.Deaths} duration={2} /></h2>
        <h2><CountUp start={0} end={props.data.Recovered} duration={2} /></h2>
        <h2><CountUp start={0} end={props.data.Active} duration={2} /></h2>
      </div>

      <div className='label'>
        <h3>INFECTADOS</h3>
        <h3>MORTOS</h3>
        <h3>RECUPERADOS</h3>
        <h3>ATIVOS</h3>
      </div>
    </div>
  )
}

export default Circle