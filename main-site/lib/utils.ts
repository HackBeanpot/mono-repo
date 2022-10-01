import { SectionData } from './types';

export function getLeftOrRight(
  direction: string,
  sectionData: SectionData[],
  currItem: SectionData
): SectionData {
  if (direction === 'left') {
    if (currItem === sectionData[0]) {
      return sectionData[2];
    }
    if (currItem === sectionData[1]) {
      return sectionData[0];
    }
    if (currItem === sectionData[2]) {
      return sectionData[1];
    }
  }
  if (direction === 'right') {
    if (currItem === sectionData[0]) {
      return sectionData[1];
    }
    if (currItem === sectionData[1]) {
      return sectionData[2];
    }
    if (currItem === sectionData[2]) {
      return sectionData[0];
    }
  }
  return currItem;
}
