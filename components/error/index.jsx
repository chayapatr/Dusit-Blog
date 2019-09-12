import React, { Fragment } from 'react'

import Navbar from 'components/navbar'

import './error.styl'

const Error = ({ code = "404", detail = "Page not found.", displayTags }) => {
    return(
        <Fragment>
            <Navbar alwaysSticky displayTags={displayTags} />
            <main id="error">
                <h1 id="title">{code}</h1>
                <h2 id="detail">{detail}</h2>
            </main>
        </Fragment>
    )
}

export default Error