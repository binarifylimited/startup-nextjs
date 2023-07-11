const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./auth/routes');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://startup_user:o23sEflabGZutnVS@insurancedb.u6oaxej.mongodb.net/StartUp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/auth', authRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
