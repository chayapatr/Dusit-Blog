/* import { h } from 'preact' */
import React from 'react'

import SliderPanel from './sliderPanel'

import './slider.styl'

const LandingSlide = () => {
    return (
        <div id="slider">
            <SliderPanel
                id={0}
                title="แอบมองเธออยู่นะจ๊ะ"
                detail="ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
                  มาเถอะมาระเบิดความฝันสักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา 
                  พูดความจริงออกไปเลยผ่านเข้ามา"
                src="/static/mockup/1.jpg"
            />
            <SliderPanel
                id={1}
                title="แอบมองเธออยู่นะจ๊ะ"
                detail="แต่เธอไม่รู้บ้างเลย"
                src="/static/mockup/2.jpg"
            />
            <SliderPanel
                id={2}
                title="Se no!"
                detail="でもそんなんじゃ だめ もうそんなんじゃ ほら 心は進化するよ もっともっと!"
                src="/static/mockup/3.jpg"
            />
            <SliderPanel
                id={3}
                title="Now let me open this scar..."
                detail="Rem best girl."
                src="/static/mockup/4.jpg"
            />
        </div>
    )
}

export default LandingSlide
