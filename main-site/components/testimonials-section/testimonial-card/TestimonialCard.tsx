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
  isSponsor
}) => {
  const isSelected = currentIndex == id;

  if (isSelected) {
    return (
      <StyledTestimonialCardContainer>
        <StyledTestimonialCardBox>
          <StyledTestimonialCardImage src={image} isSponsor={isSponsor}/>
          <StyledTestimonialTextWrapper>
          <StyledTestimonialCardAuthor isSponsor={isSponsor}>{author}</StyledTestimonialCardAuthor>
          <StyledTestimonialCardYear isSponsor={isSponsor}>{year}</StyledTestimonialCardYear>
          <StyledTestimonialCardQuote quote={quote} >{quote}</StyledTestimonialCardQuote>
          </StyledTestimonialTextWrapper>
        </StyledTestimonialCardBox>
      </StyledTestimonialCardContainer>
    )
  } else {
    return null;
  };

};


export default TestimonialCard;
