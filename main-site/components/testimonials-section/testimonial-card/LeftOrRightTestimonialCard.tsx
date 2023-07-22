import React from 'react';
import { LeftOrRightTestimonialCardProps } from '../../../lib/types';
import {
  StyledTestimonialCardContainer,
  StyledTestimonialCardBox,
  StyledTestimonialCardAuthor,
  StyledTestimonialCardImage,
  StyledTestimonialCardQuote,
  StyledTestimonialCardYear
} from './TestimonialCard.styles';

const LeftOrRightTestimonialCard: React.FC<LeftOrRightTestimonialCardProps> = ({
  testimonial
}) => {
  return (
    <StyledTestimonialCardContainer>
      <StyledTestimonialCardBox>
        <StyledTestimonialCardImage src={testimonial.image}/>

        <StyledTestimonialCardAuthor>
          {testimonial.author}
        </StyledTestimonialCardAuthor>

        <StyledTestimonialCardYear>
          {testimonial.year}
        </StyledTestimonialCardYear>

        <StyledTestimonialCardQuote quote={testimonial.quote}>
          {testimonial.quote}
        </StyledTestimonialCardQuote>
      </StyledTestimonialCardBox>
    </StyledTestimonialCardContainer>
  );
};

export default LeftOrRightTestimonialCard;
