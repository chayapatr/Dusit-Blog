import { h } from 'preact'

import "./heading.styl"

const Heading = ({ children, adaptable, id = "" }) => {

  if(adaptable){
    return(
      <div className="adaptable">
        <h3 id={id} className="heading">
          {children}
        </h3>
        <div className="heading-line"></div>
      </div>
    )
  } else {
    return(
      <h3 id={id} className="heading">
        {children}
      </h3>
    )
  }
}

export default Heading