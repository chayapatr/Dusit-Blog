/* import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks' */
import React, { Fragment, useState, useEffect } from 'react'

import NavbarPanel from './navbar-panel'
import SearchIcon from 'icon/search'

import './navbar.styl'

const AdaptableTitle = ({ isActive }) => {
    console.log(isActive)
    if(isActive) return(
        <button id="search-button">
            <SearchIcon id="search-icon" ariaLabel="Seach" />
        </button>
    )
    return(
        <h1 id="navbar-title">Dusit here</h1>
    )
}

const Navbar = ({ alwaysSticky = false }) => {
    const [isSticky, setSticky] = useState(false)
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        if (!window) return

        if (alwaysSticky) {
            setSticky(true)
            return
        }
        determineSticky()
        stickyListener()
    }, [])

    /* Sticky navigator listener */
    const determineSticky = () => {
        if (window.scrollY / window.innerHeight >= 1) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    const stickyListener = () => {
        document.addEventListener('scroll', () => {
            determineSticky()
            stickyCleanup()
        })
        window.addEventListener('resize', () => {
            determineSticky()
            stickyCleanup()
        })
    }

    const stickyCleanup = () => {
        document.removeEventListener('scroll', () => null)
        window.removeEventListener('resize', () => null)
        setTimeout(() => {
            determineSticky()
        }, 8) // Locked listener at 120fps
    }

    return (
        <Fragment>
            <nav
                id="navbar"
                className={`${isSticky ? 'is-sticky' : ''} ${
                    isActive ? 'is-active' : ''
                }`}
            >
                <div id="navbar-wrapper">
                    <button
                        id="navbar-icon"
                        className={`${isActive ? 'is-active' : ''}`}
                        onClick={() => setActive(!isActive)}
                    >
                        <div id="line-1" className="navbar-icon-line" />
                        <div id="line-2" className="navbar-icon-line" />
                        <div id="line-3" className="navbar-icon-line" />
                    </button>
                    <AdaptableTitle isActive={isActive} />
                </div>
                <NavbarPanel
                    isActive={isActive}
                    isSticky={isSticky}
                />
            </nav>
            <div id="navbar-placeholder" />
            <div
                id="navbar-overlay"
                className={`${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(false)}
            />
        </Fragment>
    )
}

export default Navbar
