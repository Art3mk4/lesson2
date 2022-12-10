import { solveSimpleExp, simplifyExp } from "./engine";

export const normalMode = (line: string): number => {
  const solveBreackets = (
    expInBrackets: Array<string> | null,
    exp: string
  ): number => {
    if (expInBrackets === null) {
      return solveSimpleExp(exp);
    }
    const expPart = expInBrackets[1].trim();
    const answer = solveSimpleExp(expPart);
    return solveBreackets(
      exp.match(/\(([^\(\)]+)\)/),
      exp.replace(expInBrackets[0], `${answer}`)
    );
  };
  const expression = simplifyExp(line);
  const expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  return solveBreackets(expInBrackets, expression);
};

export const runner = (line: string): number => {
  return normalMode(line);
};
