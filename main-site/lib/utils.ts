import { SectionData, TestimonialData } from './types';

import Karyna from '../../shared-ui/images/karyna.png';
import Jimin from '../../shared-ui/images/jimin.png';
import Spencer from '../../shared-ui/images/spencer.png';
import Group from '../../shared-ui/images/group.png';

export function getLeftOrRight(
  direction: string,
  sectionData: SectionData[],
  currItem: SectionData
): SectionData {
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
      return testimonialData[testimonialDatalength - 2];
    } else {
      return testimonialData[currentIndex - 1];
    }
  }

  if (side == 'right') {
    if (currentIndex == testimonialDatalength - 1) {
      return testimonialData[currentIndex - 2];
    } else {
      return testimonialData[currentIndex + 1];
    }
  }
  return testimonialData[currentIndex];
}

export function getImage(author: string): string {
  if (author === 'Karyna Yen') {
    return Karyna;
  }
  if (author === 'Ji-min Kim') {
    return Jimin;
  }
  if (author === 'Spencer Shao') {
    return Spencer;
  }
  return Group;
}
