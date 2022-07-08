import * as React from 'react';
import Document, { Html, Head, NextScript, Main } from 'next/document';

// This _document is for HTML Attributes and to use Head to run our CSS scripts

export default class MyDocument extends Document {
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
