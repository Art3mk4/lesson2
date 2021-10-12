import {
  mul,
  div,
  add,
  minus,
  exponentiation,
  pow,
  fact,
} from './mathOperators';

describe('mathOperators test cases', () => {
  it('mul 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2);
  });

  it('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4);
  });

  it('div 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1);
  });

  it('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
  });

  it('exponentiation 2 ** 2 to equal 2', () => {
    expect(exponentiation(2, 2)).toBe(4);
  });

  it('exponentiation 4 ** to equal 16', () => {
    expect(exponentiation(4, 4)).toBe(16);
  });

  it('2 ^ 2 to equal 4', () => {
    expect(pow(2, 2)).toBe(4);
  });

  it('5 ^ 3 to equal 125', () => {
    expect(pow(5, 3)).toBe(125);
  });

  it('5 ! to equal 120', () => {
    expect(fact(5)).toBe(120);
  });

  it('1 ! to equal 1', () => {
    expect(fact(1)).toBe(1);
  });

  it('add 4 + 2 to equal 6', () => {
    expect(add(4, 2)).toBe(6);
  });

  it('minus 4 - 2 to equal 2', () => {
    expect(minus(4, 2)).toBe(2);
  });
});
