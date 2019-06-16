/* React */
import React from 'react'

/* CSS */
import '../static/css/landing-main-selector.css'

/* View */
const LandingMainSelector = (props) => {
    let { name, src } = props
    
    return(
        <a className="landing-main-selector" role="button">
            <h4 className="landing-main-selector-name">{name}</h4>
            <div className="landing-main-selector-overlay-gradient"></div>
            <div className="landing-main-selector-overlay"></div>
            <img
                className="landing-main-selector-image" 
                src={src} 
                alt={name}
            />
        </a>
    )
}

export default LandingMainSelector