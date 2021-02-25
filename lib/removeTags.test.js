const { describe, it, expect } = require('@jest/globals');
const { removeB } = require('./removeTags');

describe('removeB', () => {
  it('should remove all <b> from string', () => {
    const stringB = '<b> This is test <b> This is test <b> This is test ';
    const stringNoB = ' This is test  This is test  This is test ';
    expect(removeB(stringB)).toBe(stringNoB);
  });

  it('should remove all </b> from string', () => {
    const stringB = '</b> This is test </b> This is test </b> This is test ';
    const stringNoB = ' This is test  This is test  This is test ';
    expect(removeB(stringB)).toBe(stringNoB);
  });

  it('should remove all <b> and </b> from string', () => {
    const stringB = '</b> This is test <b> This is test </b> This is test ';
    const stringNoB = ' This is test  This is test  This is test ';
    expect(removeB(stringB)).toBe(stringNoB);
  });

  it('should return same string when <b> and </b> are not included', () => {
    const stringB = 'This is test. This is test This is test ';
    expect(removeB(stringB)).toBe(stringB);
  });
});
