const Words = require('./Words');

describe('statics', () => {
  const promise = jest.fn().mockImplementation(() => new Promise((resolve) => { resolve('resolved promise'); }));
  describe('promiseLooper', () => {
    afterEach(jest.clearAllMocks);

    const arr = ['arr'];

    it('should be an instance of array', () => {
      expect(Words.promiseLooper(arr, 'word', promise)).toBeInstanceOf(Array);
    });

    it('should return an array with key and data', async () => {
      const inst = await Promise.all(Words.promiseLooper(arr, 'word', promise));

      expect(inst).toEqual([{
        key: 'arr', data: 'resolved promise',
      }]);
    });

    it('should promise to be called with "word arr"', () => {
      Words.promiseLooper(arr, 'word', promise);

      expect(promise).toBeCalledWith('word arr');
    });

    it('should promise to be called with "arr word"', () => {
      Words.promiseLooper(arr, 'word', promise, true);

      expect(promise).toBeCalledWith('arr word');
    });
  });

  describe('getWords', () => {
    let spy;
    beforeAll(() => {
      spy = jest.spyOn(Words, 'promiseLooper').mockImplementation(() => [new Promise((resolve) => { resolve([]); })]);
    });

    it('should call promiseLooper 7 times', async () => {
      await Words.getWords('word', promise);

      expect(spy).toBeCalledTimes(7);
    });
  });
});
