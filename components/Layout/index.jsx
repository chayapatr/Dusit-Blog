import React, { Fragment } from 'react'

import { Provider } from 'react-redux'
import store from 'stores/store'

const Layout = ({ children }) => {
    return(
        <Provider store={store}>
            <Fragment>
                { children }
            </Fragment>
        </Provider>
    )
}

export default Layout