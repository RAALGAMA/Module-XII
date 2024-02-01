// File: hero.js
// Description: Component to display the hero section of the home page.

import Image from 'next/image'; // Importing the Next.js Image component.
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      {/* Image component for the hero section. */}
      <div className={classes.image}>
        <Image
          src="/images/site/sobek_kaiju.jpg"
          alt='An image showing Sobek, the Kaiju'
          width={300}
          height={300}
        />
      </div>
      {/* Heading and description for the hero section. */}
      <h1>Hi, Im Sobek</h1>
      <p>I Blog about Kaijus</p>
    </section>
  );
}

export default Hero;
