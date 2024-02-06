export interface EventDate {
  id: number;
  title: string;
  content: string;
}

export const mockData: EventDate[] = [
  {
    id: 0,
    title: 'FRI 11',
    content: 'FRIDAY - FEBRUARY 11'
  },
  {
    id: 2,
    title: 'SAT 12',
    content: 'SATURDAY - FEBRUARY 12'
  },
  {
    id: 3,
    title: 'SUN 13',
    content: 'SUNDAY - FEBRUARY 13'
  }
];
