import type { Request, Response, NextFunction } from 'express';

export default function handleError(
  e: Error,
  rq: Request,
  rs: Response,
  nx: NextFunction
) {
  console.info(e.stack);
  console.error(e);
  rs.status(500).send({ content: 'Something broke on server' });
}
