// File: posts-util.js
// Description: Utility functions for handling blog posts.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory path for blog posts.
const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get all files in the blog posts directory.
export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

// Function to get data for a specific blog post.
export function getPostData(postIdentifier) {
  // Remove the file extension to get the post slug.
  const postSlug = postIdentifier.replace(/\.md$/, '');

  // Construct the file path for the blog post.
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  // Read the content of the blog post file.
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse the front matter and content using gray-matter.
  const { data, content } = matter(fileContent);

  // Construct the post data object with slug, front matter data, and content.
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

// Function to get data for all blog posts.
export function getAllPosts() {
  // Get the list of all blog post files.
  const postFiles = getPostFiles();

  // Map over each post file and retrieve its data.
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  // Sort all blog posts based on their date in descending order.
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

// Function to get featured blog posts.
export function getFeaturedPosts() {
  // Get data for all blog posts.
  const allPosts = getAllPosts();

  // Filter out only the featured blog posts.
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}
