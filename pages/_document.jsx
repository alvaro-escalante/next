import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {  
    return (
      <html lang='en'>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&amp;display=swap" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}