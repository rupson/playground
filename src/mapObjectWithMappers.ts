const identity: <T>(value: T) => T = (value) => value;

const getMapFn = (valueMapper: any) => (key: any) =>
  valueMapper[key] || identity;

const applyToAllValues = (fn: any) => (source: any) =>
  Object.keys(source).reduce(
    (result, key) => Object.assign(result, { [key]: fn(source[key]) }),
    {}
  );

export const mapObjectWithMappers =
  (keyMapper: any, valueMapper: any) => (mapTarget: any) =>
    Object.keys(mapTarget).reduce(
      (mapped, key) =>
        Object.assign(
          mapped,
          keyMapper[key]
            ? {
                [keyMapper[key]]: applyToAllValues(getMapFn(valueMapper)(key))(
                  mapTarget[key]
                ),
              }
            : {}
        ),
      {}
    );
