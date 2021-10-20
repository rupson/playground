import { repeat } from ".";

describe("repeat", () => {
  it("repeats a variable", () => {
    expect(repeat("x")(5)).toMatchObject(["x", "x", "x", "x", "x"]);
  });
});
