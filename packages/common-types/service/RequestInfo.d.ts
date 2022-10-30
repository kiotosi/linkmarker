import { LinkPreview } from '../links/link';

export namespace RequestInfo {
  export namespace Meta {
    export interface Request {
      url: string;
    }
    export type Response = LinkPreview;
    export type StatusCode = 422 | 400 | 200;
  }
}
