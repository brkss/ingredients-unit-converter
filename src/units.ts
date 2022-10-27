/*
 * currently supported units !
 *
 * pound
 * tsp
 * ounce
 * grain
 * quart
 * bunch
 */

export interface Unit {
  names: string[];
  base: number;
  operation: string;
  to_unit: string;
}

export const units: Unit[] = [
  {
    names: ["pound", "pounds"],
    to_unit: "kg",
    base: 2.205,
    operation: "divide"
  },
  {
    names: ["tsp", "teaspoon", "spoon"],
    to_unit: "teaspoon",
    base: 1,
    operation: "multiply"
  },
  {
    names: ['ounce', "ounces"],
    to_unit: "g",
    base: 28.35,
    operation: "multiply",
  },
  {
    names: ["grain", "grains"],
    to_unit: "mg",
    base: 65,
    operation: "multiply"
  },
  {
    names: ["quart"],
    to_unit: "l",
    base: .94,
    operation: "multiply"
  },
];
