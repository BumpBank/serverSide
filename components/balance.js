import React from 'react'
import cookie from 'react-cookie'


const Balance = (props) => {
  console.log(cookie.load('session'))
console.log(props);
  return <div>
    <h1>Hey {props.state.username}</h1>
    <h1>This is the balance ${props.state.balance}</h1>
  </div>
}

module.exports = Balance
