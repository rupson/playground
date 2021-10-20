import { Input, transformCsvData } from ".";

const csv: Input[] = [
  {
    a: "1234",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
  },
  {
    a: "1234",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
  },
  {
    a: "abcd",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
  },
];

const expected = [
  {
    a: "1234",
    b: "b",
    c: "c",
    d: ["d", "d"],
    e: ["e", "e"],
    f: ["f", "f"],
    g: ["g", "g"],
    h: ["h", "h"],
  },
  {
    a: "abcd",
    b: "b",
    c: "c",
    d: ["d"],
    e: ["e"],
    f: ["f"],
    g: ["g"],
    h: ["h"],
  },
];

describe("transformCsvData", () => {
  it("groups properly", () => {
    expect(transformCsvData("a")(csv)).toMatchObject(expected);
  });
});
