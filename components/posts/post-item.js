// File: post-item.js
// Description: Component to display a single blog post item.

import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  // Format the date using the Date API.
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Construct the image path and link path for the post.
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link legacyBehavior href={linkPath}>
        <a>
          <div className={classes.image}>
            {/* Use the Next.js Image component for optimized image loading. */}
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
