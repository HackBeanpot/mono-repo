import React, { useState } from 'react';
import { testimonialSectionData } from '../../../lib/data';
import { getLeftOrRightTestimonial } from '../../../lib/utils';
import TestimonialCard from '../testimonial-card/TestimonialCard';
import { StyledTestimonialButtons } from '../testimonial-card/TestimonialCard.styles';
import {
  StyledCactusButtons,
  StyledTestimonialsCenterContainer,
  StyledTestimonialsContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer
} from './Testimonials.styles';

import cactus1 from '../../../../shared-ui/images/cactus1.png';
import cactus2 from '../../../../shared-ui/images/cactus2.png';
import cactus3 from '../../../../shared-ui/images/cactus3.png';
import cactus4 from '../../../../shared-ui/images/cactus4.png';
import LeftOrRightTestimonialCard from '../testimonial-card/LeftOrRightTestimonialCard';
import { TestimonialData } from '../../../lib/types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const goToTestimonial = (index: number): void => {
    setCurrentIndex(index);
  };

  function getCactus(index: number): string {
    if (index === 0) {
      return cactus1;
    }
    if (index === 1) {
      return cactus2;
    }
    if (index === 2) {
      return cactus3;
    }
    return cactus4;
  }
  const getLeftTestimonial: TestimonialData = getLeftOrRightTestimonial(
    'left',
    testimonialSectionData,
    currentIndex
  );
  const getRightTestimonial: TestimonialData = getLeftOrRightTestimonial(
    'right',
    testimonialSectionData,
    currentIndex
  );
  return (
    <>
      <StyledTestimonialsContainer>
        <StyledTestimonialsLeftContainer>
          <LeftOrRightTestimonialCard testimonial={getLeftTestimonial} />
        </StyledTestimonialsLeftContainer>
        <StyledTestimonialsCenterContainer>
          {testimonialSectionData.map((data) => (
            <TestimonialCard
              key={data.id}
              id={data.id}
              author={data.author}
              year={data.year}
              quote={data.quote}
              currentIndex={currentIndex}
            />
          ))}
        </StyledTestimonialsCenterContainer>
        <StyledTestimonialsRightContainer>
          <LeftOrRightTestimonialCard testimonial={getRightTestimonial} />
        </StyledTestimonialsRightContainer>
      </StyledTestimonialsContainer>
      <StyledTestimonialButtons>
        {testimonialSectionData.map((testimonial, testimonialIndex) => (
          <StyledCactusButtons
            src={getCactus(testimonialIndex)}
            onClick={(): void => goToTestimonial(testimonialIndex)}
            isToggled={testimonialIndex == currentIndex}
          />
        ))}
      </StyledTestimonialButtons>
    </>
  );
};

export default Testimonials;
