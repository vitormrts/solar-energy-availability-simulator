import MockAdapter from 'axios-mock-adapter';
import api from './api';

describe('api - Infra', () => {
  it('should request get correctly', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      test: true
    };
    mockAdapter.onGet(mockUrl).reply(200, mockResponse);
    const response = await api.get({ url: mockUrl });
    expect(response?.data).toMatchObject(mockResponse);
  });

  it('should request get and return false when error', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onGet(mockUrl).reply(404);
    const response = await api
      .get({ url: mockUrl })
      .then(() => true)
      .catch(() => false);
    expect(response).toBe(false);
  });

  it('should request post correctly', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      test: true
    };
    const expectedResponse = mockResponse;
    mockAdapter.onPost(mockUrl).reply(200, mockResponse);
    const response = await api.post({ url: mockUrl });
    expect(response?.data).toMatchObject(expectedResponse);
  });

  it('should request post and return false when error', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onPost(mockUrl).reply(404);
    const response = await api
      .post({ url: mockUrl })
      .then(() => true)
      .catch(() => false);
    expect(response).toBe(false);
  });

  it('should request put correctly', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      test: true
    };
    const expectedResponse = mockResponse;
    mockAdapter.onPut(mockUrl).reply(200, mockResponse);
    const response = await api.put({ url: mockUrl });
    expect(response?.data).toMatchObject(expectedResponse);
  });

  it('should request put and return false when error', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onPut(mockUrl).reply(404);
    const response = await api
      .put({ url: mockUrl })
      .then(() => true)
      .catch(() => false);
    expect(response).toBe(false);
  });
});
