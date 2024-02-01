// File: notification.js
// Description: Component for displaying notifications with dynamic styles based on the status.

// Importing ReactDOM for rendering the component.
import ReactDOM from 'react-dom';

// Importing styles for the Notification component.
import classes from './notification.module.css';

// Notification component function that takes title, message, and status as props.
function Notification(props) {
  const { title, message, status } = props;

  // Determine the CSS classes based on the status prop.
  let statusClasses = '';

  // Apply 'success' class for successful notifications.
  if (status === 'success') {
    statusClasses = classes.success;
  }

  // Apply 'error' class for error notifications.
  if (status === 'error') {
    statusClasses = classes.error;
  }

  // Combine base notification class with status-specific class.
  const cssClasses = `${classes.notification} ${statusClasses}`;

  // Return JSX for rendering the notification with dynamic styles.
  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications') );
}

// Export the Notification component as the default export for the module.
export default Notification;
