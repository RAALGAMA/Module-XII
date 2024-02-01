// File: contact.js
// Description: API endpoint for handling contact form submissions.

// Importing MongoClient from the 'mongodb' package.
import { MongoClient } from 'mongodb';

// Define the handler function for the API endpoint.
async function handler(req, res) {
  // Check if the HTTP method is POST.
  if (req.method === 'POST') {
    // Destructure the email, name, and message from the request body.
    const { email, name, message } = req.body;

    // Validate the input fields.
    if (
      !email                ||
      !email.includes('@')  ||
      !name                 ||
      name.trim() === ''    ||
      !message              ||
      message.trim() === ''
    ) {
      // Return a 422 Unprocessable Entity status if input is invalid.
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Create a new message object with the extracted data.
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    // Create the dinamic connection String.
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.6er6kdn.mongodb.net/`;

    try {
      // Connect to the MongoDB database.
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      // Handle errors related to database connection.
      res.status(500).json({ message: 'Something went wrong with the database connection.' });
      return;
    }

    const db = client.db('cluster0'); // Selecting the database

    try {
      // Insert the new message into the 'messages' collection.
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      // Handle errors related to storing the message in the database.
      client.close(); // Close the database connection.
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close(); // Close the database connection.

    // Return a 201 Created status with a success message and the new message data.
    res.status(201).json({ message: "Success", data: newMessage });
  }
}

// Export the handler function as the default export for the module.
export default handler;
