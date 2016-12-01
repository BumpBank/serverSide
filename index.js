import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import clone from 'clone'
import Main from './components/main'
import Balance from './components/balance'
import Splitting from './components/splitting'
const reducer = require('./reducer')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)


const initialState = JSON.parse(document.getElementById('data').dataset.payload)


const store = createStore(reducer, initialState)

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(
    <div>
    <Main state={state}/>
    <Balance name="balance" state={state}/>
    <Splitting name="splitting" state={state}/>
    </div>,
    main)

})

store.dispatch({type: 'INIT'})
