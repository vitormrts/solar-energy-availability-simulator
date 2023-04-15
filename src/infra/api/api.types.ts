import { type Dictionary } from '@src/types/common.d';

export interface ApiGetRequest {
  url: string
  headers?: Dictionary<string>
}

export interface ApiPostRequest {
  url: string
  headers?: Dictionary<string>
  data?: any
}
