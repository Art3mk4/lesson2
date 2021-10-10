import { parser } from './parser';

describe('Parser correct cases', () => {
  it('1 + 32', () => {
    expect(parser('1 + 32')).toEqual([1, '+', 32]);
  });

  it('11 + 3 * 22', () => {
    expect(parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22]);
  });

  it('1 + 32 - 2 + 2', () => {
    expect(parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2]);
  });

  it('2 ** 2 + 4', () => {
    expect(parser('2 ** 2 + 4')).toEqual([2, '**', 2, '+', 4]);
  });

  it('2 ^ 5 + 3', () => {
    expect(parser('2 ^ 5 + 3')).toEqual([2, '^', 5, '+', 3]);
  });
});

describe('Parser invalid cases', () => {
  it('1 + + 33 - 2', () => {
    expect(() => parser('1 + + 33 - 2')).toThrow(
      TypeError('Unexpected string')
    );
  });

  it('2 ** ** 2 - 2', () => {
    expect(() => parser('2 ** ** 2 - 2')).toThrow(
      TypeError('Unexpected string')
    );
  });

  it('1 f 33 - 2', () => {
    expect(() => parser('1 f 33 - 2')).toThrow(TypeError('Unexpected string'));
  });
});
