import React from 'react';
import { H2 } from '../../../shared-ui/style/typography';
import Testimonials from './testimonials/Testimonials';
import { StyledTestimonialsSectionContainer } from './TestimonialsSection.styles';
import { TestimonialsSectionProps } from '../../lib/types';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  isSponsor,
  testimonialData
}) => {
  return (
    <div id="testimonials">
      <StyledTestimonialsSectionContainer>
        <H2>Testimonials</H2>
        <Testimonials isSponsor={isSponsor} testimonialData={testimonialData} />
      </StyledTestimonialsSectionContainer>
    </div>
  );
};

export default TestimonialsSection;
