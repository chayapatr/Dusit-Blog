import { h } from 'preact';

import LandingSlide from 'components/landingSlide'

import 'css/landing.css';

const Landing = () => {
  return(
    <div id="landing">
      <LandingSlide />
    </div>
  )
}

export default Landing;