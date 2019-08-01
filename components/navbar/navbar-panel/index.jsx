import { h } from 'preact'
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
    const { isActive } = props

    if (isActive) {
        return (
            <div id="navbar-panel" className="is-active">
                <Title title="home" href="/" />
                <Detail title="category a" href="/category-a" />
                <Detail title="category b" href="/category-b" />
                <Detail title="category c" href="/category-c" />
                <Detail title="category d" href="/category-d" />
                <Detail title="category e" href="/category-e" />
                <Detail title="category f" href="/category-f" />
            </div>
        )
    } else {
        return <div id="navbar-panel" />
    }
}

export default NavbarPanel
