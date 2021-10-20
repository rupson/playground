export const repeat = <T>(repetitor: T) => (length: number) =>
  [...new Array(length)].map(() => repetitor);


// type RepeatFunctor<T> = ((input: T) => unknown) | ((input: T, index: number) => unknown)
// export const repeatWith = <T>(repetitor: T) => (functor: (arg: RepeatFunctor<T>) => unknown) => (length: number) =>
//   [...new Array(length)].map((_, index) => functor(repetitor, index));
