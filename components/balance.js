import React from 'react'

const Balance = (props) => {
console.log(props);
  return <div>
    <h1>Hey {props.state.username}</h1>
    <h1>This is the balance ${props.state.balance}</h1>
  </div>
}

module.exports = Balance
