import type { RequestInfo, RequestError } from 'linkmarker';

type MetaRequestError = RequestError<RequestInfo.Meta.StatusCode>;

export default async function getMeta(
  url: string
): Promise<RequestInfo.Meta.Response> {
  const body: RequestInfo.Meta.Request = {
    url,
  };

  const response = await fetch('/meta', {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    const error: MetaRequestError = await response.json();
    return Promise.reject(error);
  }

  return await response.json();
}
