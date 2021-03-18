import React, { useState, useEffect } from 'react'
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
  var [Data, setData] = useState([{}])
  var [StateSelected, setStateSelected] = useState({ Deaths: 0, Confirmed: 0, Recovered: 0, Active: 0 })
  
  const getStateSelected = (stateSelected) => {
    setStateSelected(stateSelected)
  }

  const fetchData = async () => {
    var updatedResults = []
    const result = await axios.get('https://api.covid19api.com/live/country/brazil', {headers: {"Access-Control-Allow-Origin": '*'}})
    for(let i = 1; i < 28; i++){
      updatedResults.push(result.data[result.data.length - i])
    }
    setData(updatedResults)
    setStateSelected(updatedResults[0])
    animate()
    return result
  }
  useEffect(() => {fetchData()},[])
  return (
    <>
      <NavBar />
      <Filter setStateSelected={getStateSelected} animate={animate} data={Data} />
      <Circle data={StateSelected} />
    </>
  )
}
export default Home