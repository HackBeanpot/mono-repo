export function isHappeningNow(startTime: string, endTime: string): boolean {
  return Date.now() > Date.parse(startTime) && Date.now() < Date.parse(endTime);
}
