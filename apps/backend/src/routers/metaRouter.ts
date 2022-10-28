import express from 'express';
const metaRouter = express.Router();

metaRouter.post('/', (rq, rs, nx) => {
  console.log('Meta is requested!');
});

export default metaRouter;
