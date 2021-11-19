/* eslint-disable jest/no-conditional-expect */
const Helpers = require('./Helpers');

describe('statics', () => {
  describe('removeTags', () => {
    it('should remove all <b> from string', () => {
      const stringB = '<b> This is test <b> This is test <b> This is test ';
      const stringNoB = ' This is test  This is test  This is test ';
      expect(Helpers.removeTags(stringB)).toBe(stringNoB);
    });

    it('should remove all </b> from string', () => {
      const stringB = '</b> This is test </b> This is test </b> This is test ';
      const stringNoB = ' This is test  This is test  This is test ';
      expect(Helpers.removeTags(stringB)).toBe(stringNoB);
    });

    it('should remove all <b> and </b> from string', () => {
      const stringB = '</b> This is test <b> This is test </b> This is test ';
      const stringNoB = ' This is test  This is test  This is test ';
      expect(Helpers.removeTags(stringB)).toBe(stringNoB);
    });

    it('should return same string when <b> and </b> are not included', () => {
      const stringB = 'This is test. This is test This is test ';
      expect(Helpers.removeTags(stringB)).toBe(stringB);
    });
  });

  describe('formatGoogleData', () => {
    it('should throw error if not array', () => {
      expect.assertions(1);

      try {
        Helpers.formatGoogleData({});
      } catch (e) {
        expect(e.message).toBe('Data is wrong');
      }
    });

    it('should throw error if first item is not array', () => {
      expect.assertions(1);

      try {
        Helpers.formatGoogleData([{}]);
      } catch (e) {
        expect(e.message).toBe('Data is wrong');
      }
    });

    it('should return array and remove <b></b>', () => {
      const data = [[['<b>1</b>'], ['<b>2</b>']]];
      const format = Helpers.formatGoogleData(data);
      expect(format).toEqual(['1', '2']);
    });
  });
});
