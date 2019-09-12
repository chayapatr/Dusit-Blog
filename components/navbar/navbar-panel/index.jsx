/* import { h } from 'preact' */
import React from 'react'

import Link from 'next/link'

import './navbar-panel.styl'

const Title = props => {
    let { title = 'home', href = '/' } = props

    return (
        <Link href={href}>
            <a className="link">
                <h1 className="title">{title}</h1>
            </a>
        </Link>
    )
}

const Detail = props => {
    let { title = 'home', href = '/' } = props

    return (
        <Link href={href}>
            <a className="link">
                <h3 className="detail">{title}</h3>
            </a>
        </Link>
    )
}

const NavbarPanel = props => {
    const { isActive, displayTags } = props

    if (isActive) {
        return (
            <div id="navbar-panel" className="is-active">
                <Title title="Home" href="/" />
                <Title title="Category" href="/category" />
                {displayTags.map((tag, index) => (
                    <Detail key={index} title={tag} href={`/category/${tag}`} />
                ))}
            </div>
        )
    } else {
        return <div id="navbar-panel" />
    }
}

export default NavbarPanel
