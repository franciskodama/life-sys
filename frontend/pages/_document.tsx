import * as React from 'react';
import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// This _document is for HTML Attributes and to use Head to run our CSS scripts

export default class MyDocument extends Document {
  // This was the code from WesBos, but it was giving the error that was fixed by the code below

  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage(
  //     (App: JSX.IntrinsicAttributes) => (props: JSX.IntrinsicAttributes) =>
  //       sheet.collectStyles(<App {...props} />)
  //   );

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en-CA'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
