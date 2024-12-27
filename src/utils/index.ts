import moment from "moment";

export const momentFormatUTC = (date: string) => {
  return moment(new Date(date)).utc().format('MMM D, YYYY; h:mm A [UTC]');
};