import React from 'react';
import { LeftOrRightTestimonialCardProps } from '../../../lib/types';
import {
  StyledTestimonialCardContainer,
  StyledTestimonialCardBox,
  StyledTestimonialCardAuthor,
  StyledTestimonialCardImage,
  StyledTestimonialCardQuote,
  StyledTestimonialCardYearCompany,
  StyledTestimonialTextWrapper
} from './TestimonialCard.styles';

const LeftOrRightTestimonialCard: React.FC<LeftOrRightTestimonialCardProps> = ({
  testimonial,
  isSponsor
}) => {
  return (
    <StyledTestimonialCardContainer>
      <StyledTestimonialCardBox isSponsor={isSponsor}>
        <StyledTestimonialCardImage
          isSponsor={isSponsor}
          src={testimonial.image}
        />
        <StyledTestimonialTextWrapper isSponsor={isSponsor}>
          <StyledTestimonialCardAuthor isSponsor={isSponsor}>
            {testimonial.author}
          </StyledTestimonialCardAuthor>

          <StyledTestimonialCardYearCompany isSponsor={isSponsor}>
          {isSponsor ? testimonial.company : testimonial.year}
          </StyledTestimonialCardYearCompany>

          <StyledTestimonialCardQuote
            isSponsor={isSponsor}
            quote={testimonial.quote}
          >
            {testimonial.quote}
          </StyledTestimonialCardQuote>
        </StyledTestimonialTextWrapper>
      </StyledTestimonialCardBox>
    </StyledTestimonialCardContainer>
  );
};

export default LeftOrRightTestimonialCard;
