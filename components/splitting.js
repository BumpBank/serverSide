import React from 'react'

const Splitting = (props) => {
  return <div className="splitting">
    <h3>Splitting a bill</h3>
    <form className="splittingForm">
      <input type="text" placeholder="How much" className="howMuch"/>
      <input type="text" placeholder="How many people" className="peopleNum"/>
      <button type="submit" className="calcBtn">Splitting</button>
    </form>
  </div>
}

module.exports = Splitting
