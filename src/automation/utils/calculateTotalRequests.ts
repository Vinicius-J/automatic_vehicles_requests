export function calculateTotalRequests(start: string, end: string): number {
  const initData = new Date(start);
  const finishData = new Date(end);

  const days = finishData.getTime() - initData.getTime();
  const difference = Math.floor(days / (1000 * 60 * 60 * 24) + 1);
  return difference;
}
