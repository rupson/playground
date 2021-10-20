export const repeat =
  <T>(repetitor: T) =>
  (length: number) =>
    [...new Array(length)].map(() => repetitor);

type RepeatFunctor<T> = (input: T, index: number) => unknown;
export const repeatWith =
  <T>(repetitor: T) =>
  (functor: RepeatFunctor<T>) =>
  (length: number) =>
    [...new Array(length)].map((_, index) => functor(repetitor, index));
