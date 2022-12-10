export type UnaryScalarOperationType = (first: number) => number;
export type ScalarOperationType = (first: number, second: number) => number;
export type TrigonometricOperationType = (value: number) => number;

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

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const fact: UnaryScalarOperationType = (first: number): number => {
  if (first == 0) return 1;
  return first * fact(first - 1);
};

export const sin: TrigonometricOperationType = (value: number): number => {
  return parseFloat(Math.sin(value * (Math.PI / 180)).toFixed(2));
};

export const cos: TrigonometricOperationType = (value: number): number => {
  return parseFloat(Math.cos(value * (Math.PI / 180)).toFixed(2));
};

export const tg: TrigonometricOperationType = (value: number): number => {
  return parseFloat(Math.tan(value * (Math.PI / 180)).toFixed(2));
};

export const trigonomenticOperators: {
  [key: string]: TrigonometricOperationType;
} = {
  sin: sin,
  cos: cos,
  tg: tg,
};

export const scalarOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const unaryMathOperators: { [key: string]: UnaryScalarOperationType } = {
  "!": fact,
};

export const mathOperators: {
  [key: string]:
    | ScalarOperationType
    | TrigonometricOperationType
    | UnaryScalarOperationType;
} = {
  ...scalarOperators,
  ...trigonomenticOperators,
  ...unaryMathOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3, 4];

const [ZERO, FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": ZERO,
  "^": FIRST,
  sin: SECOND,
  cos: SECOND,
  tg: SECOND,
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
};
