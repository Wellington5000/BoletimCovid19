import React, { useState } from 'react'
import './filter.css'

const Filter = (props) => {
  const onChangeStateSelected = () => {
    var s = document.getElementById('state')
    var indexItemSelected = s.options[s.selectedIndex].index
    props.setStateSelected(props.data[indexItemSelected])
    props.animate()
  }
  return (
    <>
      <div className='filter'>
        <div>
          <label htmlFor="country">País: </label>
          <select name="country" id="country">
            <option value="Brasil">Brasil</option>
          </select>
        </div>
        <div>
          <label htmlFor="state">Estado: </label>
          <select onChange={onChangeStateSelected} name="state" id="state">
            {props.data.map((state, index) => (
              <option key={index} value={state.Province}> {state.Province}⠀ </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter