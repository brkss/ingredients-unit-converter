import { units, Unit } from "./units";

interface Response {
  value: number;
  unit: string;
}

export const convert = (unit: string, value: number): Response | null => {
  if (!unit || !value) {
    throw new Error("Invalid Input !");
  }

  // serch for unit
  let target: Unit | null = null;
  for (const u of units) {
    if (u.names.includes(unit)) {
      target = u;
      break;
    }
  }
  // unit not found;
  if (!target) return null;

  if (target.operation === "multiply") {
    return { unit: target.to_unit, value: Number((value * target.base).toFixed(2)) };
  } else if (target.operation === "divide") {
    return { unit: target.to_unit, value: Number((value / target.base).toFixed(2)) };
  }

  return null;
};
