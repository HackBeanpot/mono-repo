import { Dispatch, SetStateAction } from 'react';

export interface FaqPropsArray {
  id: number;
  question: string;
  answer: string;
}

export interface FaqData {
  data: Array<FaqPropsArray>;
}

export interface FaqProps {
  id: number;
  question: string;
  answer: string;
  selectedQuestion: number;
  setSelectedQuestion: Dispatch<SetStateAction<number>>;
}
