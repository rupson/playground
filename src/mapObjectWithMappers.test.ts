import { mapObjectWithMappers } from "./mapObjectWithMappers";

const myObj = {
  id: {
    value: "1234",
  },
  age: {
    value: 12,
    prevValue: 15,
  },
};

const expectedResponse = {
  ["my-id"]: {
    value: "1234",
  },
  age: {
    value: "foo-12",
    prevValue: "foo-15",
  },
};

const fooify = (str: string) => `foo-${str}`;

describe("given a mapping of keys", () => {
  const myKeyMapper = {
    id: "my-id",
    age: "age",
  };
  describe(`and a mapping of values`, () => {
    const valueMapper = {
      age: fooify,
    };
    it("says hello", () => {
      expect(mapObjectWithMappers(myKeyMapper, valueMapper)(myObj)).toEqual(
        expectedResponse
      );
    });
  })
});
