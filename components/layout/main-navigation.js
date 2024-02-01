// File: main-navigation.js
// Description: Component to display the main navigation bar.

import Logo from '@/components/layout/logo'; // Importing the Logo component.
import Link from 'next/link';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* Make the logo a link to the home page. */}
      <Link href='/'>
        <Logo />
      </Link>
      {/* Navigation links for different sections of the application. */}
      <nav>
        <ul>
          <li><Link href="/posts">Post</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
