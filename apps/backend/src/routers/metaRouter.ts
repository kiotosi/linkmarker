import type { RequestError, RequestInfo } from 'linkmarker';
import express from 'express';
import metaGuard from '../guards/meta.guard';
import jsMetaParser from 'js-meta-parser';
import getRandomColor from '../utils/getRandomColor';

const metaRouter = express.Router();

metaRouter.post('/', async (rq, rs) => {
  const body: RequestInfo.Meta.Request = rq.body;

  // Validate body
  try {
    await metaGuard.validateAsync(body);
  } catch (e) {
    const error: RequestError<RequestInfo.Meta.StatusCode> = {
      title: 'Bad Request',
      description: 'Invalid data (url): ' + body.url,
      status: 400,
    };

    rs.status(error.status).send(error);
    return;
  }

  // Get meta
  try {
    const parsedData = await jsMetaParser(body.url);
    const response: RequestInfo.Meta.Response = {
      href: parsedData.url.href,
      favicon: parsedData.iconList[0] || '',
      themeColor: parsedData.themeColor || getRandomColor(),
      tagList: [],
      id: Date.now(),
      text: parsedData.descriptionList[0] || '',
      title: parsedData.title || '',
    };

    rs.send(response);
  } catch (e) {
    const error: RequestError<RequestInfo.Meta.StatusCode> = {
      title: 'Bad Data',
      status: 422,
      description: "Can't parse url + " + rq.body['url'],
    };

    rs.status(error.status).send(error);
  }
});

export default metaRouter;
