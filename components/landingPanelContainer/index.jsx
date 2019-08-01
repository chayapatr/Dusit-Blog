import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import Link from 'next/link'

import LandingHeading from 'components/landingHeading'

import './landing-panel-container.css'

const LandingPanel = ({ href, src }) => {
  return(
    <Link href={`/blog/${href}`}>
      <a className="landing-panel-link">
        <div className="landing-panel" style={{ backgroundImage: `url('${src}')` }}>
          <article className="landing-panel-overlay">
            <h5 className="landing-panel-title">
              Hello World
            </h5>
            <p className="landing-panel-detail">
              ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ มาเถอะมาระเบิดความฝัน
            </p>
          </article>
        </div>
      </a>
    </Link>
  )
}

const LandingPanelContainer = () => {
  const [ isLarge, setLarge ] = useState(false);

  useEffect(() => {
    if(!window) return;

    setLargeHandler();
    detectLarge();
  }, [isLarge]);

  const detectLarge = () => {
    window.addEventListener("resize", () => {
      setLargeHandler();
    });
  }

  const setLargeHandler = () => {
    if(window.innerWidth >= 960){
      setLarge(true)
    } else {
      setLarge(false);
    }
  }

  if(!isLarge){
    return <Fragment></Fragment>
  }

  return(
    <div id="landing-panel-container">
      <LandingHeading id="landing-panel-title">Most Popular</LandingHeading>
      <div className="landing-panel-wrapper">
        <LandingPanel src="/static/mockup/1.jpg" />
        <LandingPanel src="/static/mockup/2.jpg" />
        <LandingPanel src="/static/mockup/3.jpg" />
      </div>
      <div className="landing-panel-wrapper">
        <LandingPanel src="/static/mockup/4.jpg" />
        <LandingPanel src="/static/mockup/5.jpg" />
        <LandingPanel src="/static/mockup/1.jpg" />        
      </div>  
    </div>
  )
}

export default LandingPanelContainer