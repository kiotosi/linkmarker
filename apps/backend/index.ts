import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env['PORT'] || 4000;

app.listen(port, () => {
  console.log('Backend started on port: ' + port);
});
