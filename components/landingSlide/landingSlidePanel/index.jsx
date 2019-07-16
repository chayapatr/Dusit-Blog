import { h } from 'preact'

import { connect } from 'react-redux'

import './landing-slide-panel.css'

const mapStateToProps = (store, ownProps) => {
  return{
    store: {

      landingPanel: {
        active: store.landingPanel.active
      }

    },
    props: ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {

      updateLandingPanel: (panelID) => dispatch({
        type: "UpdateLandingPanel",
        payload: {
          landingPanel: {
            active: panelID
          }
        }
      })

    }
  }
}

const LandingSlidePanel = ({ store, dispatch, props }) => {
  const { landingPanel } = store
  const { updateLandingPanel } = dispatch
  const { id, title = 'Dusit Here', detail = 'Dusit Here blogging system', src = '/static/mockup/1.jpg' } = props

  const updateLandingPanelHandler = (event) => {
    event.preventDefault()
    updateLandingPanel(id)
  } 

  if(landingPanel.active === id){
    return(
      <button onClick={event => updateLandingPanelHandler(event)} className="landing-slide-panel" style={{ backgroundImage: `url(${src})`, flex: 1 }}>
        <div className="landing-slide-detail is-active">
          <h2 className="landing-slide-title is-active">
            {title}
          </h2>
          <p className="landing-slide-detail">
            {detail}
          </p>
        </div>
      </button>
    )
  } else {
    return(
      <button onClick={event => updateLandingPanelHandler(event)} className="landing-slide-panel" style={{ backgroundImage: `url(${src})` }}>
        <div className="landing-slide-detail is-not-active">
          <h2 className="landing-slide-title">
            {title}
          </h2>
        </div>
      </button>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingSlidePanel)