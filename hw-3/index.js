import express from "express";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from "node:fs";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// static
app.use(express.static(path.resolve(__dirname, 'public')));
// pug - template
app.set('view engine', 'pug');
app.use('/views', express.static(path.resolve(__dirname, 'views')));

// middleware
app.use((req, res, next) => {
  if (req.url !== '/.well-known/appspecific/com.chrome.devtools.json') {
    console.log(req.method, req.url);
  }
  next();
});

app.get('/', (req, res) => {
  res.send('work');
});

app.get('/test', (req, res) => {
  res.json({
    "name": "John Doe",
    "age": 30,
    "isEmployee": true,
    "hobbies": ["reading", "cycling"],
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  })
})

app.post('/api', (req, res) => {
  res.send('POST request')
})

app.get('/redirect-test', (req, res) => {
  res.redirect('/');
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Pug',
    userName: 'Alex',
    isStudent: true,
    topics: ['Variables', 'if condition', 'each loop'],
  });
});

app.get('/downloads/:filename', async (req, res) => {
  const { filename } = req.params;
  const safeFilename = path.basename(filename);
  const filesDirectory = path.resolve(__dirname, 'files');
  const filePath = path.resolve(filesDirectory, safeFilename);

  if (filePath !== path.join(filesDirectory, safeFilename)) {
    return res.status(400).send('Invalid file name');
  }

  try {
    await fs.access(filePath);
    return res.download(filePath, safeFilename);
  } catch {
    return res.status(404).send('File not found');
  }
});


app.use((req, res) => {
  res.status(404).send('404 not found');
});


app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`));