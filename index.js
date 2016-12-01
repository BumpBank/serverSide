import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import clone from 'clone'
import Main from './components/main'
import Balance from './components/balance'
const reducer = require('./reducer')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

const initialState = {
  id: 1,
  username: 'ron',
  password: 'ronwins',
  pin: 1234,
  accountNumber: '123456-1234567-00',
  balance: 100.1,
}

const store = createStore(reducer, initialState)

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(
    <div>
    <Main state={state}/>
    <Balance name="balance" state={state}/>
    </div>,
    main)

})

store.dispatch({type: 'INIT'})
