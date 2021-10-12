export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryScalarOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const exponentiation: UnaryScalarOperationType = (
  first: number
): number => first * first;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const fact: UnaryScalarOperationType = (first: number): number => {
  let result = 1;
  if (first === 0 || first === 1) {
    return result;
  }
  for (let i = 1; i <= first; i++) {
    result *= i;
  }
  return result;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '**': exponentiation,
  '^': pow,
  '!': fact,
};

export const binaryMathOperators: { [key: string]: ScalarOperationType } = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '^': pow,
};

export const unaryMathOperators: { [key: string]: UnaryScalarOperationType } = {
  '**': exponentiation,
  '!': fact,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  '*': FIRST,
  '/': FIRST,
  '**': FIRST,
  '^': FIRST,
  '!': FIRST,
  '+': SECOND,
  '-': SECOND,
};
