import { scalarOperators } from "./mathOperators";
export const isNumber = (item: string): boolean => !isNaN(Number(item));
export const isUnaryOperator = (op: string): boolean =>
  scalarOperators.hasOwnProperty(op);
