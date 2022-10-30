export interface RequestError<T = 500 | 502 | 400> {
  title: string;
  status: T;
  description: string;
}
