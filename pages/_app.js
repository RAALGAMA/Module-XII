// File: _app.js
// Description: Main application component that wraps all pages with a common layout.
// Imports global styles and includes a Layout component to ensure consistent page structure.

// Importing global styles to be applied across all pages.
import '../styles/globals.css';

// Importing the Layout component, which provides a consistent page structure.
import Layout from '@/components/layout/layout';

import Head from 'next/head';

// The main application component that serves as the entry point for all pages.
function MyApp({ Component, pageProps }) {
  // Wrapping the entire application with the Layout component for consistent styling and structure.
  return (
    <Layout>
      <Head>
        <title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

        </title>
      </Head>
      {/* Rendering the current page component (specified by the route) along with its props. */}
      <Component {...pageProps} />
    </Layout>
  );
}

// Exporting the main application component as the default export.
export default MyApp;
