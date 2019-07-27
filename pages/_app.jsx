import React from 'react'
import App, { Container } from 'next/app'

import Main from '../components/Main'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    )
  }
}