import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {  
    return (pug`
      html(lang='en')
        Head
          link(href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&amp;display=swap",rel="stylesheet")
          meta(name="viewport",content="width=device-width,minimum-scale=1,initial-scale=1")
        body
          Main
          NextScript`
    )
  }
}