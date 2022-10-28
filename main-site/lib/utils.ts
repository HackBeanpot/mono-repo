
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
