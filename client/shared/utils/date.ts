import { format, differenceInBusinessDays } from 'date-fns';

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'PPP');
}

export function calculateBusinessDays(startDate: string | Date, endDate: string | Date): number {
  return differenceInBusinessDays(new Date(endDate), new Date(startDate)) + 1;
}

export function isWeekend(date: string | Date): boolean {
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
}