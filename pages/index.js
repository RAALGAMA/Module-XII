// File: index.js
// Description: Home page component that includes a Hero section and displays featured posts.
// Fetches featured posts using getStaticProps for static site generation.

// Import from react.
import { Fragment } from "react";

// Importing the Hero component responsible for the introductory section of the home page.
import Hero from '../components/home-page/hero';

// Importing the FeaturedPost component to display a section of featured blog posts.
import FeaturedPost from "@/components/home-page/featured-posts";

// Importing the utility function to fetch featured posts for static site generation.
import { getFeaturedPosts } from "@/lib/posts-util";

// Importing the Head component.
import Head from "next/head";

// Home page component definition.
function HomePage(props) {
  // Rendering the home page with a Hero section and a section displaying featured posts.
  return (
    <Fragment>
      <Head>
        <title>Welcome To My Blog</title>
        <meta name="description" content="I post about kaijus and web development"/>
      </Head>
      {/* Including the Hero section for the home page. */}
      <Hero />
      {/* Displaying featured posts using the FeaturedPost component. */}
      <FeaturedPost posts={props.posts}/>
    </Fragment>
  );
}

// Fetches featured posts at build time for static site generation.
export function getStaticProps() {
  // Fetching featured posts using the utility function.
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts }, // Passing fetched featured posts as props.
    // Uncomment the following line to enable incremental static regeneration (ISR).
    // revalidate: 60
  };
}

// Exporting the HomePage component as the default export.
export default HomePage;
