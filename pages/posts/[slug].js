// File: [slug].js
// Description: Dynamic page for displaying a single blog post.

import Head from "next/head";

// Importing the PostContent component responsible for rendering the content of a single blog post.
import PostContent from "@/components/posts/post-detail/post-content";

// Importing utility functions for fetching post data.
import { getPostData, getPostFiles } from "@/lib/posts-util";

// Importing revalidatePath from the next/cache module for page revalidation.
import { revalidatePath } from "next/cache";
import { Fragment } from "react";

// Dynamic page component for displaying a single blog post.
function PostDetailPage(props) {
  // Rendering the PostContent component with the fetched post data as props.
  return (
    <Fragment>
      <Head>
        <title>{ props.post.title }</title>
        <meta name="description" content={ props.post.excerpt } />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

// Function to fetch static props for a specific blog post based on the provided context.
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  // Fetching post data for the specified slug using the utility function.
  const postData = getPostData(slug);

  return {
    props: { post: postData }, // Passing the fetched post data as props.
    revalidate: 300, // Revalidate the page every 300 seconds (5 minutes) for potential updates.
  };
}

// Function to define the dynamic paths for the static generation of this page.
export function getStaticPaths() {
  // Fetching filenames of all blog posts using the utility function.
  const postFilenames = getPostFiles();

  // Extracting slugs from post filenames.
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })), // Generating dynamic paths based on slugs.
    fallback: false, // Do not allow fallback for non-existing paths.
  };
}

// Exporting the PostDetailPage component as the default export.
export default PostDetailPage;
