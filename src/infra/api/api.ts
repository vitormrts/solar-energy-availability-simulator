/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
import { config } from '@src/config';
import { type ApiGetRequest, type ApiPostRequest } from './api.types';

const instance = axios.create({
  baseURL: config.apiUrl
});

const get = async ({ url, headers }: ApiGetRequest) =>
  await instance.get(url, { headers });

const post = async ({ url, headers, data }: ApiPostRequest) =>
  await instance.post(url, data, { headers });

const put = async ({ url, headers, data }: ApiPostRequest) =>
  await instance.put(url, data, { headers });

const api = {
  get,
  instance,
  post,
  put
};

export default api;
