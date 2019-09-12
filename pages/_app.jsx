import { Fragment } from 'react'
import App from 'next/app'

import { Provider } from 'react-redux'
import store from 'stores/store'

import NProgress from 'next-nprogress/component'

import 'stylus/init.styl'
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Fragment>
                <NProgress color="#007aff" />
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Fragment>
        )
    }
}

export default MyApp
