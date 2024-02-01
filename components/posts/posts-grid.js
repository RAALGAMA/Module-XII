// File: posts-grid.js
// Description: Component to display a grid of blog posts.

import classes from './posts-grid.module.css';
import PostItem from './post-item';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {/* Map through the array of posts and render a PostItem for each. */}
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
