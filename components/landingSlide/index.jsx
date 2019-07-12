import { h } from 'preact';
import { useState } from 'preact/hooks';

import LandingSlidePanel from './landingSlidePanel';

import './landing-slide.css'

const LandingSlide = () => {
  return(
    <div id='landing-slide'>
      <LandingSlidePanel
        id={0}
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