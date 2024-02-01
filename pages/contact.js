// File: contact.js
// Description: Page component for the Contact Us page.
// Imports the ContactForm component and renders it.

// Importing the ContactForm component, which contains the contact form for user interaction.
import ContactForm from "@/components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

// Page component for the Contact Us page.
function ContactPage() {
  // Rendering the ContactForm component to display the contact form on the Contact Us page.
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meat name="description" content="Send me your messages." />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

// Exporting the ContactPage component as the default export.
export default ContactPage;
