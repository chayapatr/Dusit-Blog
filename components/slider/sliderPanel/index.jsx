/* import { h } from 'preact' */
import React from 'react'

import Link from 'next/link'

import { connect } from 'react-redux'

import './slider-panel.styl'

const mapStateToProps = (store, ownProps) => {
    return {
        store: {
            landingPanel: {
                active: store.landingPanel.active,
            },
        },
        props: ownProps,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: {
            updateLandingPanel: panelID =>
                dispatch({
                    type: 'UpdateLandingPanel',
                    payload: {
                        landingPanel: {
                            active: panelID,
                        },
                    },
                }),
        },
    }
}

const LandingSlidePanel = ({ store, dispatch, props }) => {
    const { landingPanel } = store
    const { updateLandingPanel } = dispatch
    const {
        id,
        title,
        detail,
        src
    } = props

    const updateLandingPanelHandler = event => {
        event.preventDefault()
        updateLandingPanel(id)
    }

    if (landingPanel.active === id) {
        return (
            <button
                onClick={event => updateLandingPanelHandler(event)}
                className="slider-panel"
                style={{ backgroundImage: `url(${src})`,flex: 1 }}
            >
                <div className="slider-detail is-active">
                    <h2 className="title is-active">{title}</h2>
                    <p className="detail">{detail}</p>
                    <Link href={`/blog/${title}`}>
                        <a className="read">Read more</a>
                    </Link>
                </div>
            </button>
        )
    } else {
        return (
            <button
                onClick={event => updateLandingPanelHandler(event)}
                className="slider-panel"
                style={{ backgroundImage: `url(${src})` }}
            >
                <div className="slider-detail is-not-active">
                    <h2 className="title">{title}</h2>
                </div>
            </button>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingSlidePanel)
