import React from 'react';
import { TestimonialCardProps } from '../../../lib/types';
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
  currentIndex, 
  image
}) => {
  const isSelected = currentIndex == id;

  if (isSelected) {
    return (
      <StyledTestimonialCardContainer>
        <StyledTestimonialCardBox>
          <StyledTestimonialCardImage src={image}/>
          <StyledTestimonialCardAuthor>{author}</StyledTestimonialCardAuthor>
          <StyledTestimonialCardYear>{year}</StyledTestimonialCardYear>
          <StyledTestimonialCardQuote quote={quote} >{quote}</StyledTestimonialCardQuote>
        </StyledTestimonialCardBox>
      </StyledTestimonialCardContainer>
    )
  } else {
    return null;
  };

};


export default TestimonialCard;
