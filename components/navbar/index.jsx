/* import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks' */
import React, { Fragment, useState, useEffect } from 'react'

import NavbarPanel from './navbar-panel'
import SearchIcon from 'icon/search'

import './navbar.styl'

const Navbar = ({ alwaysSticky = false, displayTags }) => {
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
        }, 4) // Locked listener at 240fps
    }

    const setActiveHandler = (event, newIsActive = !isActive) => {
        event.preventDefault()

        if(!newIsActive) event.target.blur()
        setActive(newIsActive)
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
                        onClick={(event) => setActiveHandler(event)}
                    >
                        <div id="line-1" className="navbar-icon-line" />
                        <div id="line-2" className="navbar-icon-line" />
                        <div id="line-3" className="navbar-icon-line" />
                    </button>
                    { isActive ?
                        <button id="search-button">
                            <SearchIcon id="search-icon" ariaLabel="Seach" />
                        </button>
                    :
                        <h1 id="navbar-title">Dusit here</h1>
                    }
                </div>
                <NavbarPanel
                    isActive={isActive}
                    isSticky={isSticky}
                    displayTags={displayTags[0].fields.tags}
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
