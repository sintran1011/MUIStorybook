import moment from "moment";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const momentFormatUTC = (date: string) => {
  return moment(new Date(date)).utc().format("MMM D, YYYY; h:mm A [UTC]");
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
