import React from 'react'
import Pay from './pay'

const Splitting = (props) => {
  return <div className="splitting">
    <h3>Splitting a bill</h3>
    <form className="splittingForm">
      <input id="how-much" type="text" placeholder="How much" className="howMuch"/>
      <input id="how-many" type="text" placeholder="How many people" className="peopleNum"/>
      <button onClick={(e) => clickHandler(e, props)} type="submit" className="calcBtn">Split</button>
    </form>
    {renderAmount(props.state)}
  </div>
}

function clickHandler(e, props) {
  e.preventDefault()
  var howMuch = document.getElementById('how-much').value
  var howMany = document.getElementById('how-many').value
  console.log(howMuch, howMany)
  var payload = howMuch / howMany
  props.dispatch({type:"SHOW_PAY", payload:payload})
}

function renderAmount(state) {
  if (state.splitted) {
    return <div>
      <h3>${state.splitted}</h3>
      <Pay name="pay" state={state}/>
    </div>
  }
}

module.exports = Splitting
