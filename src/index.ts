// @ts-nocheck

import * as R from "ramda";

export type Input = Record<string, string>

const combineOnlyArrays = R.cond([
  [Array.isArray, R.concat],
  [R.T, R.identity],
]);

const combineObjects = (arr) =>
  arr.reduce((acc, curr) => R.mergeWith(combineOnlyArrays, acc, curr), {});

const makeArray = (x) => [x];

const isConcatableKey = (key) =>
  !["a", "b", "c"].includes(key);

const mapperByKey = (value, key) =>
  isConcatableKey(key) ? makeArray(value) : value;

const transformRow = R.mapObjIndexed(mapperByKey);

export const transformCsvData = (groupByPropName: string) => (csv: Input[]) => {
  return R.pipe(
    R.map(transformRow),
    R.groupBy(R.prop(groupByPropName)),
    R.map(combineObjects),
    Object.values
  )(csv);
};
