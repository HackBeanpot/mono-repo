import { TestimonialData } from './types';

export function getLeftOrRight<T>(
  direction: string,
  sectionData: T[],
  currItem: T
): T {
  const dataLength = sectionData.length;
  const itemIndex = sectionData.indexOf(currItem);
  if (direction === 'left') {
    if (itemIndex === 0) {
      return sectionData[dataLength - 1];
    }
    return sectionData[itemIndex - 1];
  }
  if (direction === 'right') {
    if (itemIndex === dataLength - 1) {
      return sectionData[0];
    }
    return sectionData[itemIndex + 1];
  }
  return currItem;
}

export function getLeftOrRightTestimonial(
  side: string,
  testimonialData: TestimonialData[],
  currentIndex: number
): TestimonialData {
  const testimonialDatalength = testimonialData.length;
  if (side == 'left') {
    if (currentIndex == 0) {
      return testimonialData[testimonialDatalength - 1];
    } else {
      return testimonialData[currentIndex - 1];
    }
  }


  if (side == 'right') {
    if (currentIndex == testimonialDatalength - 1) {
      return testimonialData[0];
    } else {
      return testimonialData[currentIndex + 1];
    }
  }
  return testimonialData[currentIndex];
}

