/* import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks' */
import React, { Fragment, useState, useEffect } from 'react'

import Link from 'next/link'

import Heading from 'components/heading'

import './panel.styl'

const LandingPanel = ({ title, src, summary }) => {
    return (
        <Link href={`/blog/${title}`}>
            <a className="link">
                <div
                    className="landing-panel"
                    style={{ backgroundImage: `url('${src}')` }}
                >
                    <article className="overlay">
                        <h5 className="title">{title}</h5>
                        <p className="detail">
                            {summary}
                        </p>
                    </article>
                </div>
            </a>
        </Link>
    )
}

const LandingPanelContainer = ({ popular }) => {
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
                { popular.firstHalf.map((blog, index) => (
                    <LandingPanel
                        key={index}
                        title={blog.fields.title}
                        src={`https:${blog.fields.thumbnail.fields.file.url}`}
                        summary={blog.fields.summary}
                    />
                )) }
            </div>
            <div className="wrapper">
                { popular.secondHalf.map((blog, index) => (
                    <LandingPanel
                        key={index}
                        title={blog.fields.title}
                        src={`https:${blog.fields.thumbnail.fields.file.url}`}
                        summary={blog.fields.summary}
                    />
                )) }
            </div>
        </div>
    )
}

export default LandingPanelContainer
