export interface EventDate {
  id: number;
  title: string;
  content: string;
}

export const mockData: EventDate[] = [
  {
    id: 0,
    title: 'FRI 10',
    content: 'FRIDAY FEB 10'
  },
  {
    id: 2,
    title: 'SAT 11',
    content: 'SATURDAY FEB 11'
  },
  {
    id: 3,
    title: 'SUN 12',
    content: 'SUNDAY FEB 12'
  }
];
