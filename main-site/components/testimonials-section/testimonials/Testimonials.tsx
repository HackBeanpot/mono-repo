import React, { useState } from 'react';
import useMatchMedia from 'react-use-match-media';
import { getLeftOrRight, getLeftOrRightTestimonial } from '../../../lib/utils';
import TestimonialCard from '../testimonial-card/TestimonialCard';
import { StyledTestimonialButtons } from '../testimonial-card/TestimonialCard.styles';
import {
  StyledCactusButtons,
  StyledTestimonialsCenterContainer,
  StyledTestimonialsContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialNumbers,
  StyledButtonNumberContainer
} from './Testimonials.styles';
import cactus1 from '../../../../shared-ui/images/cactus1.png';
import cactus2 from '../../../../shared-ui/images/cactus2.png';
import cactus3 from '../../../../shared-ui/images/cactus3.png';
import cactus4 from '../../../../shared-ui/images/cactus4.png';
import LeftOrRightTestimonialCard from '../testimonial-card/LeftOrRightTestimonialCard';
import { TestimonialData } from '../../../lib/types';
//sponsor testimonial data
import { min } from '../../../../shared-ui/lib/responsive';
import Arrow from '../../../../shared-ui/components/arrow/Arrow';
import { TestimonialsSectionProps } from '../../../lib/types';


const Testimonials: React.FC<TestimonialsSectionProps> = ({
  isSponsor, 
  testimonialData
}) => {
  const isDesktop = useMatchMedia(min.tablet);
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
  // const getLeftTestimonial: TestimonialData = getLeftOrRightTestimonial(
  //   'left',
  //   testimonialData,
  //   currentIndex
  // );
  // const getRightTestimonial: TestimonialData = getLeftOrRightTestimonial(
  //   'right',
  //   testimonialData,
  //   currentIndex
  // );
  return (
    <>
      <StyledTestimonialsContainer>
        {/* {isDesktop && (
          <StyledTestimonialsLeftContainer>
            <LeftOrRightTestimonialCard testimonial={getLeftTestimonial} />
          </StyledTestimonialsLeftContainer>
        )} */}
        {!isDesktop && (
          <Arrow
            left
            onClick={(): void =>
              setCurrentIndex(
                testimonialData[
                  getLeftOrRight<TestimonialData>(
                    'left',
                    testimonialData,
                    testimonialData[currentIndex]
                  ).id
                ].id
              )
            }
          />
        )}
        <StyledTestimonialsCenterContainer>
          {testimonialData.map((data) => (
            <TestimonialCard
              key={data.id}
              id={data.id}
              author={data.author}
              year={data.year}
              quote={data.quote}
              currentIndex={currentIndex}
              image={data.image}
              isSponsor={isSponsor}
            />
          ))}
        </StyledTestimonialsCenterContainer>
        {!isDesktop && (
          <Arrow
            left={false}
            onClick={(): void =>
              setCurrentIndex(
                testimonialData[
                  getLeftOrRight<TestimonialData>(
                    'right',
                    testimonialData,
                    testimonialData[currentIndex]
                  ).id
                ].id
              )
            }
          />
        )}
        {/* {isDesktop && (
          <StyledTestimonialsRightContainer>
            <LeftOrRightTestimonialCard testimonial={getRightTestimonial} />
          </StyledTestimonialsRightContainer>
        )} */}
      </StyledTestimonialsContainer>
      {isDesktop && (
        <StyledTestimonialButtons>
          {testimonialData.map((_, testimonialIndex) => (
            <StyledButtonNumberContainer key={`testimonial-${testimonialIndex}`}>
              <StyledCactusButtons
                src={getCactus(testimonialIndex)}
                onClick={(): void => goToTestimonial(testimonialIndex)}
                isToggled={testimonialIndex === currentIndex}
              />
              <StyledTestimonialNumbers isToggled={testimonialIndex === currentIndex}>
                {testimonialIndex + 1}
              </StyledTestimonialNumbers>
            </StyledButtonNumberContainer>
          ))}
        </StyledTestimonialButtons>

      )}
    </>
  );
};

export default Testimonials;
