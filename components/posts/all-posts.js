// File: all-posts.js
// Description: Component to display a section with all blog posts.

import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      {/* Render the PostsGrid component to display the grid of posts. */}
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
