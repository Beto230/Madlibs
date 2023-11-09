const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("adds commas to a large number", () => {
    expect(addCommas(123456789)).toBe("123,456,789");
  });

  test("handles a small number without commas", () => {
    expect(addCommas(42)).toBe("42");
  });

  test("handles a number with decimal places", () => {
    expect(addCommas(9876543.21)).toBe("9,876,543.21");
  });

  test("handles a negative number with commas", () => {
    expect(addCommas(-9876543)).toBe("-9,876,543");
  });

  test("handles a zero without commas", () => {
    expect(addCommas(0)).toBe("0");
  });

  test("handles a string representation of a number", () => {
    expect(addCommas("987654321")).toBe("987,654,321");
  });

  test("handles a large number with commas", () => {
    expect(addCommas(12345678901234567890)).toBe("12,345,678,901,234,567,890");
  });

  test("handles a number with multiple decimal points", () => {
    expect(addCommas(1234.5678)).toBe("1,234.5678.90");
  });
});

