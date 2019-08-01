import { h } from 'preact'

import LandingSlidePanel from './landingSlidePanel'

import './landing-slide.styl'

const LandingSlide = () => {
  return(
    <div id='landing-slide'>
      <LandingSlidePanel
        id={0}
        title="แอบมองเธออยู่นะจ๊ะ"
        detail="ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
        มาเถอะมาระเบิดความฝันสักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา 
        พูดความจริงออกไปเลยผ่านเข้ามา"
        src='/static/mockup/1.jpg'
      />
      <LandingSlidePanel 
        id={1}
        title="แอบมองเธออยู่นะจ๊ะ"
        detail="แต่เธอไม่รู้บ้างเลย"
        src='/static/mockup/2.jpg'
      />
      <LandingSlidePanel 
        id={2}
        title="Se no!"
        detail="でもそんなんじゃ だめ もうそんなんじゃ ほら 心は進化するよ もっともっと!"
        src='/static/mockup/3.jpg' 
      />
      <LandingSlidePanel 
        id={3}
        title="Now let me open this scar..."
        detail="Rem best girl."
        src='/static/mockup/4.jpg' 
      />
    </div>
  )
}

export default LandingSlide;