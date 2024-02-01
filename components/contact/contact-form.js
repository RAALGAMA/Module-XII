// File: contact-form.js
// Description: Component to display a contact form.

// Importing React hooks for managing state and side effects.
import { useState, useEffect } from 'react';

// Importing styles for the ContactForm component.
import classes from './contact-form.module.css';

// Importing the Notification component for displaying status messages.
import Notification from '../ui/notification';

// Async function to send contact data to the server.
async function sendContactData(contactDetails) {
  // Send a POST request to the /api/contact endpoint with the entered data.
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Parse the JSON response.
  const data = await response.json();

  // Check for errors in the response and throw an error if not ok.
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

// ContactForm component function.
function ContactForm() {
  // State variables for email, name, and message.
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  // State variables for request status ('pending', 'success', 'error').
  const [requestStatus, setRequestStatus] = useState('');
  const [requestError, setRequestError] = useState();

  // useEffect to reset requestStatus and requestError after 3 seconds.
  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  // Function to handle sending the message.
  async function sendMessageHandle(event) {
    event.preventDefault();

    // Set the request status to 'pending' while sending the message.
    setRequestStatus('pending');

    try {
      // Attempt to send the contact data and set the status to 'success'.
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      });
      setRequestStatus('success');
      // Set all inputs to empty.
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      // If an error occurs, set the error message and status to 'error'.
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  // Define the notification content based on the request status.
  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  // Return JSX for rendering the contact form.
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      {/* Form for entering contact information and the message. */}
      <form className={classes.form} onSubmit={sendMessageHandle}>
        <div className={classes.controls}>
          {/* Email input field. */}
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={event => setEnteredEmail(event.target.value)}
            />
          </div>
          {/* Name input field. */}
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={event => setEnteredName(event.target.value)}
            />
          </div>
          {/* Message textarea field. */}
          <div className={classes.control}>
            <label htmlFor='message'>Your message</label>
            <textarea
              type='message'
              rows='5'
              required
              value={enteredMessage}
              onChange={event => setEnteredMessage(event.target.value)}
            />
          </div>

          {/* Button to submit the form. */}
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
      {/* Render the Notification component if notification is present. */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

// Export the ContactForm component as the default export for the module.
export default ContactForm;
