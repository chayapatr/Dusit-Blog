import { h } from 'preact'
import Link from 'next/link'

import './landing-sticky-navbar-panel.css'

const LandingStickyNavbarPanelTitle = (props) => {
  let { title = "home", href = "/" } = props

  return(
    <Link href={href}>
      <a className="landing-sticky-navbar-panel-link">
        <h5 className="landing-sticky-navbar-panel-title">
          {title}
        </h5>
      </a>
    </Link>
  )
}

const LandingStickyNavbarPanelDetail = (props) => {
  let { title = "home", href = "/" } = props

  return(
    <Link href={href}>
      <a className="landing-sticky-navbar-panel-link">
        <h6 className="landing-sticky-navbar-panel-detail">
          {title}
        </h6>
      </a>
    </Link>
  )
}

const LandingStickyNavbarPanel = (props) => {
  const { isActive } = props;

  if(isActive){
    return(
      <div id="landing-sticky-navbar-panel" className="is-active">
        <LandingStickyNavbarPanelTitle title="home" href="/" />
        <LandingStickyNavbarPanelDetail title="category a" href="/category-a" />
        <LandingStickyNavbarPanelDetail title="category b" href="/category-b" />
        <LandingStickyNavbarPanelDetail title="category c" href="/category-c" />
        <LandingStickyNavbarPanelDetail title="category d" href="/category-d" />
        <LandingStickyNavbarPanelDetail title="category e" href="/category-e" />
        <LandingStickyNavbarPanelDetail title="category f" href="/category-f" />
      </div>
    )
  } else {
    return(
      <div id="landing-sticky-navbar-panel"></div>
    )
  }
}

export default LandingStickyNavbarPanel