export const formatDateTime = (date: string) => {
  const dateTime = new Date(date);
  return `${dateTime.getDate()}/${
    dateTime.getMonth() + 1
  }/${dateTime.getFullYear()} at ${dateTime.getHours()}:${dateTime.getMinutes()}`;
};