export const getNextRequestDate = (startDay: string, requestCount: number) => {
  const startDate = new Date(startDay);
  const requestDate = 1000 * 60 * 60 * 24 * requestCount;
  const day = startDate.setTime(startDate.getTime() + requestDate);
  return new Date(day).toLocaleDateString("pt-br", {
    dateStyle: "short",
  });
};
