const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/createFile', (req, res) => {
  const timestamp = new Date().toISOString();
  const fileName = `${timestamp}.txt`;
  const filePath = path.join(__dirname, 'files', fileName);
  const fileContent = `Timestamp: ${timestamp}`;

  fs.writeFileSync(filePath, fileContent);

  res.status(201).json({ message: 'File created successfully', filePath });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
