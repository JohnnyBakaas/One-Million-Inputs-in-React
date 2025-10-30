// Thanks GPT

export function getWeek(date: Date): number {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((+date - +oneJan) / 86400000); // ms in a day
  return Math.ceil((days + oneJan.getDay() + 1) / 7);
}

export function setWeek(date: Date, week: number): Date {
  const newDate = new Date(date.getFullYear(), 0, 1);
  const dayOfWeek = newDate.getDay() || 7; // Make Sunday = 7
  newDate.setDate(newDate.getDate() - dayOfWeek + 1 + (week - 1) * 7);
  return newDate;
}
