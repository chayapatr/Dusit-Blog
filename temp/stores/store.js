import { createStore } from 'redux'

const initState = {
  landingPanel: {
    active: 0
  }
}

const reducers = (state, action) => {
  switch(action.type){
    case "UpdateLandingPanel":
      return {
        landingPanel: {
          active: action.payload.landingPanel.active,
          ...state
        }
      }
    default:
      return {
        ...state
      }
  }
}

const store = createStore(reducers, initState)
export default store