import { repeat, repeatWith } from ".";

describe("repeat", () => {
  it("repeats a variable", () => {
    expect(repeat("x")(5)).toMatchObject(["x", "x", "x", "x", "x"]);
  });
});
describe("repeatWith", () => {
  it("repeats a variable with a key", () => {
    expect(repeatWith("x")((elt, index) => `${elt}${index}`)(5)).toMatchObject([
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
    ]);
  });
});
