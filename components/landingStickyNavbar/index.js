import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import LandingStickyNavbarPanel from './landing-sticky-navbar-panel'
import SearchIcon from 'icon/search'

import './landing-sticky-navbar.css'

const LandingStickyNavbar = () => {
  const [ isSticky, setSticky ] = useState(false);
  const [ isActive, setActive ] = useState(false);

  useEffect(() => {
    if(!window) return;

    determineSticky();
    document.addEventListener("scroll", () => {
      determineSticky();
    })
    document.addEventListener("resize", () => {
      determineSticky();
    })
  }, [])

  const determineSticky = () => {
    if(window.scrollY / window.innerHeight >= 1){
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  return(
    <Fragment>
      <nav id="landing-sticky-navbar" className={`${(isSticky) ? 'is-sticky' : ''} ${(isActive) ? 'is-active' : ''}`}>
        <div id="landing-sticky-navbar-wrapper">

          <button id="landing-sticky-navbar-icon" className={`${(isActive) ? 'is-active' : ''}`} onClick={() => setActive(!isActive)}>
            <div id="landing-sticky-navbar-icon-line-1" className="landing-sticky-navbar-icon-line"></div>
            <div id="landing-sticky-navbar-icon-line-2" className="landing-sticky-navbar-icon-line"></div>
            <div id="landing-sticky-navbar-icon-line-3" className="landing-sticky-navbar-icon-line"></div>
          </button>
          { (isActive) ?
            <button id="landing-sticky-navbar-search-button">
              <SearchIcon id="landing-sticky-navbar-search-icon" ariaLabel="Seach" />
            </button>
          :
            <h1 id="landing-sticky-navbar-title">Dusit here</h1>
          }

        </div>
        <LandingStickyNavbarPanel isActive={isActive} isSticky={isSticky} />
      </nav>
      <div id="landing-sticky-navbar-placeholder"></div>
      <div id="landing-sticky-navbar-overlay" className={`${(isActive) ? 'is-active' : ''}`} onClick={() => setActive(false)}></div>

    </Fragment>
  )
}

export default LandingStickyNavbar