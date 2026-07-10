export default function randomDate(start: Date, end: Date): Date {
  if (start.getTime() > end.getTime()) {
    throw new Error("Start date must be before end date.");
  }

  const time =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());

  return new Date(time);
}
