import { LinkPreview } from '../links/link';

export namespace RequestInfo {
  export namespace Meta {
    export interface Request {
      url: string;
    }
    export interface Response extends LinkPreview {
      id: number;
    }
  }
}
