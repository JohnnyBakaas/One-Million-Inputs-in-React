import { getWeek, setWeek } from "../dateHelper";
import type { chronoInputs } from "./chronoInputs";

export const convertChrono = (
  fromType: (typeof chronoInputs)[number],
  toType: (typeof chronoInputs)[number],
  value: string
) => {
  if (value === "") return value;
  const date = (() => {
    if (fromType === "week") {
      const date = new Date();
      setWeek(date, Number(value.substring(5)));
      date.setFullYear(Number(value.substring(0, 4)));
      return date;
    }
    return new Date(value);
  })();

  if (toType === "week") return date.getFullYear() + "-W" + getWeek(date);
  if (toType === "month") return date.toISOString().substring(0, 7);
  if (toType === "date") return date.toISOString().substring(0, 10);
  if (toType === "datetime-local") return date.toISOString().substring(0, 16);
  return "";
};
