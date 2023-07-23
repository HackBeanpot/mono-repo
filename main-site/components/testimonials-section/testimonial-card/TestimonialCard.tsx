import React from 'react';
import { TestimonialCardProps } from '../../../lib/types';
import {
  StyledTestimonialCardContainer,
  StyledTestimonialCardBox,
  StyledTestimonialCardAuthor,
  StyledTestimonialCardImage,
  StyledTestimonialCardQuote,
  StyledTestimonialCardYear,
  StyledTestimonialTextWrapper
} from './TestimonialCard.styles';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  author,
  year,
  quote,
  currentIndex,
  image,
  isSponsor,
  company
}) => {
  const isSelected = currentIndex == id;

  if (isSelected) {
    return (
      <StyledTestimonialCardContainer>
        <StyledTestimonialCardBox isSponsor={isSponsor}>
          <StyledTestimonialCardImage src={image} isSponsor={isSponsor} />
          <StyledTestimonialTextWrapper isSponsor={isSponsor}>
            <StyledTestimonialCardAuthor isSponsor={isSponsor}>
              {author}
            </StyledTestimonialCardAuthor>
            <StyledTestimonialCardYear isSponsor={isSponsor}>
              {isSponsor ? company : year}
            </StyledTestimonialCardYear>
            <StyledTestimonialCardQuote quote={quote} isSponsor={isSponsor}>
              {quote}
            </StyledTestimonialCardQuote>
          </StyledTestimonialTextWrapper>
        </StyledTestimonialCardBox>
      </StyledTestimonialCardContainer>
    );
  } else {
    return null;
  }
};

export default TestimonialCard;
