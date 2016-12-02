import React from 'react'


const Balance = (props) => {
  return <div>
    <h1>Hey {props.state.username}</h1>
    <h1>Balance: ${parseFloat(props.state.balance).toFixed(2)}</h1>
  </div>
}

module.exports = Balance
