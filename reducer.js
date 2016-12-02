const clone = require('clone')

function reducer(state, action) {
  const newState = clone(state)
  const {type, payload} = action
    switch(type){
      case 'INIT':
        return newState
      case 'SHOW_PAY':
        console.log(payload);
        newState.splitted = payload
        return newState

      default:
        return newState
  }
}

module.exports = reducer
