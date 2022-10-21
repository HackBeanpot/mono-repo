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

import Karyna from '../../../../shared-ui/images/karyna.png';
import Jimin from '../../../../shared-ui/images/jimin.png';
import Spencer from '../../../../shared-ui/images/spencer.png';
import Group from '../../../../shared-ui/images/group.png';

function getImage(author: string): string {
  if (author === 'Karyna Yen') {
    return Karyna;
  }
  if (author === 'Ji-min Kim') {
    return Jimin;
  }
  if (author === 'Spencer Shao') {
    return Spencer;
  }
  return Group;
}

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
          <StyledTestimonialCardAuthor>
            <p>{author}</p>
          </StyledTestimonialCardAuthor>
          <StyledTestimonialCardYear>{year}</StyledTestimonialCardYear>
          <StyledTestimonialCardQuote>{quote}</StyledTestimonialCardQuote>
        </StyledTestimonialCardBox>
      </StyledTestimonialCardContainer>
    )
  );
};

export default TestimonialCard;
