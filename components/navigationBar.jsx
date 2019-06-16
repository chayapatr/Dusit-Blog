/* React */
import React, { useState } from 'react'

/* CSS */
import '../static/css/navigationBar.css'

/* Component */
const NavigationIcon = (props) => {
    /* Defination */
    let { isOpen } = props

    return(
        <div id="navigation-icon" className={ isOpen ? "is-open" : "" }>
            <div id="navigation-icon-line-1"></div>
            <div id="navigation-icon-line-2"></div>
            <div id="navigation-icon-line-3"></div>
        </div>
    )
}

/* View */
const NavigationBar = () => {
    /* Defination */
    const [isOpen, setIsOpen] = useState(false);

    if(!isOpen){
        return(
            <nav id="navigation-bar" onClick={() => setIsOpen(true)}>
                <section id="navigation-bar-top">
                    <NavigationIcon isOpen={isOpen} />
                </section>
                <section id="navigation-body">
                    
                </section>    
            </nav>
        )
    } else {
        return(
            <nav id="navigation-bar" className="is-open" onClick={() => setIsOpen(false)}>
                <section id="navigation-bar-top">
                    <NavigationIcon isOpen={isOpen} />
                </section>
                <section id="navigation-body" className="is-open">
                    
                </section>
            </nav>
        )
    }
}

export default NavigationBar