import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';
import { StyledTestimonialCardQuoteProps } from '../../../lib/types';

const StyledTestimonialCardContainer = styled.div`
  overflow: hidden;
`;

const StyledTestimonialCardBox = styled.div`
  padding: 2.5em;
  background-color: ${colors.TEXT_BOX};
  margin: 2em;
  border-radius: 2em;
  width: 22em;
  height: 28em;
  @media ${max.tablet} {
    margin-bottom: 10em;
  }

  @media ${max.tablet} {
    width: 18em;
    padding: 2em;
    height: 32em;
  }

  @media ${max.tabletXs} {
    width: 12em;
    height: 35em;
    padding: 1.5em;
  }
`;

const StyledTestimonialCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
  text-align: center;
  margin-bottom: 1em;

  @media ${max.tabletXs} {
    border-radius: 1em;
  }
`;

const StyledTestimonialCardAuthor = styled(H4)`
  font-size: 1.2em;
  margin-bottom: 0.4em;
`;

const StyledTestimonialCardYear = styled(P)`
  font-size: 1em;
  color: ${colors.TEXT_GREY};
  margin-bottom: 0.4em;
`;

const StyledTestimonialCardQuote = styled(P)<StyledTestimonialCardQuoteProps>`
  font-size: ${(StyledTestimonialCardQuoteProps): string => 
    StyledTestimonialCardQuoteProps.quote ?
    `calc(${StyledTestimonialCardQuoteProps.quote.length}/102em)` : `0.85em`}
    ;

  letter-spacing: 0.05em;

  @media ${max.tablet} {
    font-size: 0.8em;
  }

  @media ${max.tabletXs} {
    font-size: 0.65em;
  }
`;

const StyledTestimonialButtons = styled.div`
  cursor: pointer;
  padding: 1em;
  margin-bottom: 4em;
`;

export {
  StyledTestimonialCardContainer,
  StyledTestimonialCardBox,
  StyledTestimonialCardImage,
  StyledTestimonialCardAuthor,
  StyledTestimonialCardYear,
  StyledTestimonialCardQuote,
  StyledTestimonialButtons
};
