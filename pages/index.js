import { h, Fragment } from 'preact'

import LandingSlide from 'components/landingSlide'
import LandingStickyNavbar from 'components/landingStickyNavbar'
import LandingHeading from 'components/landingHeading'
import LandingPanelContainer from 'components/landingPanelContainer'
import Card from 'components/Card'

import 'css/landing.css'

const Landing = () => {
  return(
    <Fragment>
      <div id="landing">
        <LandingSlide />
      </div>
      <LandingStickyNavbar />

      <main id="landing-main">

        <LandingPanelContainer />

        <div id="landing-main-card-area">
          {/* This will be on the right side and IS NOT visible on mobile */}
          <div id="landing-main-card-container">
            <Card title="Bangkok Ipsum" src="/static/mockup/3.jpg" alt="Yae Sakura" tag="Game">
              ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
              มาเถอะมาระเบิดความฝัน
            </Card>
            <Card title="Bangkok Ipsum" src="/static/mockup/1.jpg" alt="Yae Sakura" tag="Game">
              ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
              มาเถอะมาระเบิดความฝัน
            </Card>
          </div>

          <LandingHeading adaptable={true}>Lastest</LandingHeading>

          {/* This will be on the left side and IS visible on mobile */}
          <div id="landing-main-card-priority-container">
            <Card title="Bangkok Ipsum" src="/static/mockup/5.jpg" alt="Yae Sakura" tag="Game">
              ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
              มาเถอะมาระเบิดความฝัน
            </Card>
            <Card title="สวัสดีครับแอดมิน" src="/static/mockup/4.jpg" alt="Yae Sakura" tag="Facebook blog">
              สักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา 
              พูดความจริงออกไปเลยผ่านเข้ามา
            </Card>
          </div>
        </div>

        <LandingHeading>Category</LandingHeading>

      </main>

    </Fragment>
  )
}

export default Landing