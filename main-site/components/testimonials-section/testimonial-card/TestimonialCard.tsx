import React from 'react';
import { TestimonialCardProps } from '../../../lib/types';
import { getImage } from '../../../lib/utils';
import {
  StyledTestimonialCardContainer,
  StyledTestimonialCardBox,
  StyledTestimonialCardAuthor,
  StyledTestimonialCardImage,
  StyledTestimonialCardQuote,
  StyledTestimonialCardYear
} from './TestimonialCard.styles';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  author,
  year,
  quote,
  currentIndex
}) => {
  const isSelected = currentIndex == id;
  return (
    isSelected && (
      <StyledTestimonialCardContainer>
        <StyledTestimonialCardBox>
          <StyledTestimonialCardImage src={getImage(author)} />
          <StyledTestimonialCardAuthor>{author}</StyledTestimonialCardAuthor>
          <StyledTestimonialCardYear>{year}</StyledTestimonialCardYear>
          <StyledTestimonialCardQuote>{quote}</StyledTestimonialCardQuote>
        </StyledTestimonialCardBox>
      </StyledTestimonialCardContainer>
    )
  );
};

export default TestimonialCard;
