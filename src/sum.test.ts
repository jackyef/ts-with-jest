import { sum } from "./sum";

describe('sum', () => {
  test('of two numbers', () => {
    const a: number = 2;
    const b: string = 3;

    expect(sum(a, b)).toBe(a + b);
  });
})