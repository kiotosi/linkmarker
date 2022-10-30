import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import metaRouter from './src/routers/metaRouter';
import errorMiddleware from './src/middleware/error.middleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/meta', metaRouter);
app.use(errorMiddleware);

const port = process.env['PORT'] || 4000;

// If express should serve directories
if (process.env['SERVE']) {
  app.use(express.static(process.env['SERVE_PATH'] || '../../dist/'));
}

const server = app.listen(port, () => {
  console.log('Backend started on port: ' + port);
});

server.timeout = 5000;
