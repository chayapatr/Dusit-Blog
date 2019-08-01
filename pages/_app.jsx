/* import { h } from 'preact' */
import App, { Container } from 'next/app'

import NProgress from 'next-nprogress/component'

import 'stylus/init.styl'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <NProgress color="#007aff" />
        <Component />
      </Container>
    );
  }
}

export default MyApp;
