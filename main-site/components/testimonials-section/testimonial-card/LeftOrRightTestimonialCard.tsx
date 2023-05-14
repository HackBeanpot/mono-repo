import React from 'react';
import { LeftOrRightTestimonialCardProps } from '../../../lib/types';
import { getImage } from '../../../lib/utils';
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
        <StyledTestimonialCardImage src={getImage(testimonial.author)} />

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
