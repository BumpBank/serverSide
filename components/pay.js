import React from 'react'
const transaction = require('../db/db').transaction

const Pay = (props) => {
  return <div className="payment">
    <form className="paymentForm">
      <input type="text" placeholder="Username of reciever" className="whoTo"/>
      <button type="submit" className="pay">Pay</button>
    </form>
  </div>
}

module.exports = Pay
