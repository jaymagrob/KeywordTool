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
});
