import React, { useState } from 'react'
import axios from 'axios'

import NavBar from './navBar/navBar'
import Filter from './filter/filter'
import Circle from './circle/circle'

const animate = () => {
  var allCircles = document.getElementsByClassName('circle')
  for (let i = 0; i < allCircles.length; i++) { allCircles[i].style = 'animation: isRotating 2s;' }
  setTimeout(() => {
    for (let i = 0; i < allCircles.length; i++) { allCircles[i].style = '' }
  }, 2000)
}

const Home = () => {
  var [Data, setData] = useState([{ Recovered: 0, Deaths: 0, Confirmed: 0, Active: 0 }])
  var [StateSelected, setStateSelected] = useState({ Recovered: 0, Deaths: 0, Confirmed: 0, Active: 0 })

  const getStateSelected = (stateSelected) => {
    setStateSelected(stateSelected)
  }
  const fetchData = async () => {
    const result = await axios.get('https://api.covid19api.com/live/country/brazil/status/confirmed', { headers: { "Access-Control-Allow-Origin": "*", "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864" } })
    result.data.length = 27
    setData(result.data)
    setStateSelected(result.data[0])
    animate()
    return result
  }
  return (
    <>
      <NavBar />
      <Filter setStateSelected={getStateSelected} animate={animate} data={Data} />
      <Circle data={StateSelected} />
      <button onClick={fetchData}>BUSCAR</button>
    </>
  )
}
export default Home