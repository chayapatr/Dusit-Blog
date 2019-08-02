/* import { h } from 'preact' */
import App, { Container } from 'next/app'

import { Provider } from 'react-redux'
import store from 'stores/store'

import NProgress from 'next-nprogress/component'

import 'stylus/init.styl'
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <NProgress color="#007aff" />
        <Provider store={store}>
          <Component />
        </Provider> 
      </Container>
    )
  }
}

export default MyApp