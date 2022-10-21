import React from 'react';
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
import { LeftOrRightTestimonialCardProps } from '../../../lib/types';

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

const LeftOrRightTestimonialCard: React.FC<LeftOrRightTestimonialCardProps> = ({
  testimonial
}) => {
  return (
    <StyledTestimonialCardContainer>
      <StyledTestimonialCardBox>
        <StyledTestimonialCardImage src={getImage(testimonial.author)} />

        <StyledTestimonialCardAuthor>
          <p>{testimonial.author}</p>
        </StyledTestimonialCardAuthor>

        <StyledTestimonialCardYear>
          {testimonial.year}
        </StyledTestimonialCardYear>

        <StyledTestimonialCardQuote>
          {testimonial.quote}
        </StyledTestimonialCardQuote>
      </StyledTestimonialCardBox>
    </StyledTestimonialCardContainer>
  );
};

export default LeftOrRightTestimonialCard;
