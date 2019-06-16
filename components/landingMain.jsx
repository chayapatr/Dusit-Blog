/* React */
import React from 'react'

/* CSS */
import '../static/css/landing-main.css'

/* View */
const LandingMainSelector = (props) => {
    let { name, detail, src } = props
    
    return(
        <header id="landing-main-carousel">
            <section id="landing-main-info">
                <h1 id="landing-main-name">{name}</h1>
                <p id="landing-main-detail">{detail}</p>
            </section>
            <div id="landing-main-overlay-gradient"></div>
            <img 
                id="landing-main-image" 
                src={src} 
                alt={name}
            />
        </header>
    )
}

export default LandingMainSelector