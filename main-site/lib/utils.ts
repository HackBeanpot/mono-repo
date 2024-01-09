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

// TO DO: Can refactor this and the above function into one. Avoiding for sake of speed
export function getLeftOrRightCarouselData<CarouselData>(
  side: "left" | "right",
  carouselData: CarouselData[],
  currentIndex: number
): CarouselData {
  const carouselDataLength = carouselData.length;

  if (side === "left") {
    if (currentIndex === 0) {
      return carouselData[carouselDataLength - 1];
    } else {
      return carouselData[currentIndex - 1];
    }
  } else {
    if (currentIndex === carouselDataLength - 1) {
      return carouselData[0];
    } else {
      return carouselData[currentIndex + 1];
    }
  }

  return carouselData[currentIndex];
}
