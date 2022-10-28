import React from 'react';
import { H2 } from '../../../shared-ui/style/typography';
import Testimonials from './testimonials/Testimonials';
import { StyledTestimonialsSectionContainer } from './TestimonialsSection.styles';

const TestimonialsSection: React.FC = () => {
  return (
    <StyledTestimonialsSectionContainer>
      <H2>Testimonials</H2>
      <Testimonials />
    </StyledTestimonialsSectionContainer>
  );
};

export default TestimonialsSection;
