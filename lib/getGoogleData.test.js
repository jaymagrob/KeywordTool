const axios = require('axios');
const { getGoogleData } = require('./getGoogleData');

jest.mock('axios');

describe('getGoogleData', () => {
  const data = { data: '\n{ "name":"John", "age":30, "city":"New York"}' };
  beforeEach(() => {
    axios.get.mockImplementation(() => Promise.resolve(data));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be a function', () => {
    expect(getGoogleData).toBeInstanceOf(Function);
  });

  it('should be instance of Promise', () => {
    expect(getGoogleData()).toBeInstanceOf(Promise);
  });

  it('should return an object', async () => {
    expect(await getGoogleData()).toEqual({
      name: 'John',
      age: 30,
      city: 'New York',
    });
  });

  it('should return an error', async () => {
    axios.get.mockImplementation(() => Promise.reject('axios error'));
    try {
      await getGoogleData();
    } catch (e) {
      expect(e).toBe('axios error');
    }
  });
});
