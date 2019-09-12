/* import { h } from 'preact' */
import React from 'react'

import SliderPanel from './sliderPanel'

import './slider.styl'

const LandingSlide = ({ displayTop }) => {
    return (
        <div id="slider">
            {displayTop.map((blog, index) => (
                <SliderPanel
                    key={index}
                    id={index}
                    title={blog.fields.title}
                    detail={blog.fields.summary}
                    src={`https:${blog.fields.thumbnail.fields.file.url}`}
                />
            ))}
        </div>
    )
}

export default LandingSlide
