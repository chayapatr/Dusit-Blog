import { h } from 'preact'

import "./landing-heading.css"

const LandingHeading = ({ children, adaptable }) => {

  if(adaptable){
    return(
      <div className="landing-adaptable-heading">
        <h3 className="landing-heading">
          {children}
        </h3>
        <div className="landing-adaptable-line"></div>
      </div>
    )
  } else {
    return(
      <h3 className="landing-heading">
        {children}
      </h3>
    )
  }
}

export default LandingHeading