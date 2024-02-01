// File: featured-posts.js
// Description: Component to display a section of featured blog posts.

import PostsGrid from '../posts/posts-grid'; // Importing the PostsGrid component.
import classes from './featured-posts.module.css';

function FeaturedPost(props) {
  return (
    <section className={classes.laterst}>
      {/* Heading for the featured posts section. */}
      <h2>Featured Posts</h2>
      {/* Render the PostsGrid component to display the grid of featured posts. */}
      <PostsGrid posts={props.posts}/>
    </section>
  );
}

export default FeaturedPost;