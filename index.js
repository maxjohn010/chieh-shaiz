const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message received: ${name} - ${email} - ${message}`);
  res.send({ status: 'success' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
