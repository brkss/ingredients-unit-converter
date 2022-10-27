import { convert } from "../index";
// -- pound
test("Test Pound", () => {
  expect(convert("pound", 10)).toMatchObject({ unit: "kg", value: 4.54 });
});

// -- teaspoon
test("Test teaspoon", () => {
  expect(convert("teaspoon", 10)).toMatchObject({
    unit: "teaspoon",
    value: 10,
  });
});

test("Test teaspoon", () => {
  expect(convert("tsp", 99)).toMatchObject({ unit: "teaspoon", value: 99 });
});

test("Test teaspoon", () => {
  expect(convert("spoon", 3)).toMatchObject({ unit: "teaspoon", value: 3 });
});

// -- ounce
test("Test ounce", () => {
  expect(convert("ounce", 3)).toMatchObject({ unit: "g", value: 85.05 });
});

test("Test ounce", () => {
  expect(convert("ounce", 0)).toThrowError();
});
