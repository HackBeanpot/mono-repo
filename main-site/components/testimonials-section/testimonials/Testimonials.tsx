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

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const goToTestimonial = (index: number): void => {
    setCurrentIndex(index);
    console.log(index);
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

  console.log(currentIndex);
  return (
    <>
      <StyledTestimonialsContainer>
        <StyledTestimonialsLeftContainer>
          <LeftOrRightTestimonialCard
            key={
              getLeftOrRightTestimonial(
                'left',
                testimonialSectionData,
                currentIndex
              ).id
            }
            id={
              getLeftOrRightTestimonial(
                'left',
                testimonialSectionData,
                currentIndex
              ).id
            }
            author={
              getLeftOrRightTestimonial(
                'left',
                testimonialSectionData,
                currentIndex
              ).author
            }
            year={
              getLeftOrRightTestimonial(
                'left',
                testimonialSectionData,
                currentIndex
              ).year
            }
            quote={
              getLeftOrRightTestimonial(
                'left',
                testimonialSectionData,
                currentIndex
              ).quote
            }
            currentIndex={currentIndex}
          />
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
          <LeftOrRightTestimonialCard
            key={
              getLeftOrRightTestimonial(
                'right',
                testimonialSectionData,
                currentIndex
              ).id
            }
            id={
              getLeftOrRightTestimonial(
                'right',
                testimonialSectionData,
                currentIndex
              ).id
            }
            author={
              getLeftOrRightTestimonial(
                'right',
                testimonialSectionData,
                currentIndex
              ).author
            }
            year={
              getLeftOrRightTestimonial(
                'right',
                testimonialSectionData,
                currentIndex
              ).year
            }
            quote={
              getLeftOrRightTestimonial(
                'right',
                testimonialSectionData,
                currentIndex
              ).quote
            }
            currentIndex={currentIndex}
          />
        </StyledTestimonialsRightContainer>
      </StyledTestimonialsContainer>
      <StyledTestimonialButtons>
        {testimonialSectionData.map((testimonial, testimonialIndex) => (
          <StyledCactusButtons
            src={getCactus(testimonialIndex)}
            onClick={(): void => goToTestimonial(testimonialIndex)}
          />
        ))}
      </StyledTestimonialButtons>
    </>
  );
};

export default Testimonials;
