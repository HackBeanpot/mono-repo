import React, { useState } from 'react';
import useMatchMedia from 'react-use-match-media';
import { getLeftOrRight, getLeftOrRightCarouselData } from '../../../lib/utils';
import TestimonialCard from '../testimonial-card/TestimonialCard';
import {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledArrowsContainer
} from './Testimonials.styles';
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

  const getLeftTestimonial: TestimonialData = getLeftOrRightCarouselData(
    'left',
    testimonialData,
    currentIndex
  );
  const getRightTestimonial: TestimonialData = getLeftOrRightCarouselData(
    'right',
    testimonialData,
    currentIndex
  );
  return (
    <div>
      <StyledTestimonialsContainer>
        {
          <StyledTestimonialsLeftContainer>
            <LeftOrRightTestimonialCard
              isSponsor={isSponsor}
              testimonial={getLeftTestimonial}
            />
          </StyledTestimonialsLeftContainer>
        }
        {isDesktop && (
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
              company={data.company}
            />
          ))}
        </StyledTestimonialsCenterContainer>
        {isDesktop && (
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
        {
          <StyledTestimonialsRightContainer>
            <LeftOrRightTestimonialCard
              isSponsor={isSponsor}
              testimonial={getRightTestimonial}
            />
          </StyledTestimonialsRightContainer>
        }
      </StyledTestimonialsContainer>
      {!isDesktop && (
        <StyledArrowsContainer>
          {
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
          }
          {
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
          }
        </StyledArrowsContainer>
      )}
    </div>
  );
};

export default Testimonials;
