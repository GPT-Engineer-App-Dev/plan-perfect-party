const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let events = [];

app.post('/api/events', (req, res) => {
  const { eventName, eventDate, eventDescription } = req.body;
  const newEvent = { id: uuidv4(), eventName, eventDate, eventDescription };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});