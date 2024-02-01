// Importing necessary elements from 'next/document'.
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Custom Document class that extends Next.js Document.
class MyDocument extends Document {
  render() {
    return (
      // The outermost HTML component with the lang attribute set to 'en'.
      <Html lang='en'>
        {/* Head component where you can include metadata and other elements */}
        <Head />

        {/* Body component */}
        <body>

          {/* Main component represents the main content of the page */}
          <Main />

          {/* NextScript component includes scripts generated by Next.js */}
          <NextScript />

          <div id='notifications'>

          </div>
        </body>
      </Html>
    );
  }
}

// Exporting the custom Document component.
export default MyDocument;
