import { EMonthString } from "../../core/enums/EMonthString";

export function getTableTitle(month?: number) {
  const date = new Date();
  const year = date.getFullYear().toString();
  const currentMonth = date.getMonth();

  if (month === 0 || month) return EMonthString[month] + " " + year;

  return EMonthString[currentMonth] + " " + year;
}
