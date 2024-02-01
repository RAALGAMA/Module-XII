// File: index.js
// Description: Page to display all blog posts.

// Importing the AllPosts component responsible for displaying a list of all blog posts.
import AllPosts from "@/components/posts/all-posts";

// Importing the utility function for fetching all blog posts.
import { getAllPosts } from "@/lib/posts-util";

import Head from "next/head";
import { Fragment } from "react";

// Page component to display all blog posts.
function AllPostPage(props) {
  // Rendering the AllPosts component with the fetched posts as props.
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A list of all programing-related tutorials and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

// Function to fetch static props for the page.
export function getStaticProps() {
  // Fetching all blog posts using the utility function.
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts }, // Passing fetched posts as props.
  };
}

// Exporting the AllPostPage component as the default export.
export default AllPostPage;
