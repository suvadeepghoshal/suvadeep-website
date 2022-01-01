import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
/**
 * To prevent of skip of the definition of the surrounding markup
 */
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
