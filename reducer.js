const clone = require('clone')

function reducer(state, action) {
  const newState = clone(state)
    switch(action.type){
      case 'INIT':
        return newState

      default:
        return newState
  }
}

module.exports = reducer
