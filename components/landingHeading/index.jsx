import { h } from 'preact'

import "./landing-heading.styl"

const LandingHeading = ({ children, adaptable, id = "" }) => {

  if(adaptable){
    return(
      <div className="landing-adaptable-heading">
        <h3 id={id} className="landing-heading">
          {children}
        </h3>
        <div className="landing-adaptable-line"></div>
      </div>
    )
  } else {
    return(
      <h3 id={id} className="landing-heading">
        {children}
      </h3>
    )
  }
}

export default LandingHeading