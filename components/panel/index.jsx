/* import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks' */
import React, { Fragment, useState, useEffect } from 'react'

import Link from 'next/link'

import Heading from 'components/heading'

import './panel.styl'

const LandingPanel = ({ href, src }) => {
    return (
        <Link href={`/blog/${href}`}>
            <a className="link">
                <div
                    className="landing-panel"
                    style={{ backgroundImage: `url('${src}')` }}
                >
                    <article className="overlay">
                        <h5 className="title">Hello World</h5>
                        <p className="detail">
                            ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                            มาเถอะมาระเบิดความฝัน
                        </p>
                    </article>
                </div>
            </a>
        </Link>
    )
}

const LandingPanelContainer = () => {
    const [isLarge, setLarge] = useState(false)

    useEffect(() => {
        if (!window) return

        setLargeHandler()
        detectLarge()
    }, [isLarge])

    const detectLarge = () => {
        window.addEventListener('resize', () => {
            setLargeHandler()
        })
    }

    const setLargeHandler = () => {
        if (window.innerWidth >= 960) {
            setLarge(true)
        } else {
            setLarge(false)
        }
    }

    if (!isLarge) {
        return <Fragment />
    }

    return (
        <div id="panel-container">
            <Heading id="panel-title">Most Popular</Heading>
            <div className="wrapper">
                <LandingPanel src="/static/mockup/1.jpg" />
                <LandingPanel src="/static/mockup/2.jpg" />
                <LandingPanel src="/static/mockup/3.jpg" />
            </div>
            <div className="wrapper">
                <LandingPanel src="/static/mockup/4.jpg" />
                <LandingPanel src="/static/mockup/5.jpg" />
                <LandingPanel src="/static/mockup/1.jpg" />
            </div>
        </div>
    )
}

export default LandingPanelContainer
