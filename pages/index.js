import { h, Fragment } from 'preact'

import LandingSlide from 'components/landingSlide'
import LandingStickyNavbar from 'components/landingStickyNavbar'

import 'css/landing.css'

const Landing = () => {
  return(
    <Fragment>
      <div id="landing">
        <LandingSlide />
      </div>
      <LandingStickyNavbar />
      <div style={{display:"block", height: "200vh"}}>
      </div>
    </Fragment>
  )
}

export default Landing