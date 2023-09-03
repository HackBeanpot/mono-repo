import styled from '@emotion/styled';
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
    StyledTestimonialCardQuoteProps.quote 
      ? StyledTestimonialCardQuoteProps.quote.length < 230
          ? `calc(${StyledTestimonialCardQuoteProps.quote.length/105}em)` // raisa
          : StyledTestimonialCardQuoteProps.quote.length < 300
              ? `calc(${StyledTestimonialCardQuoteProps.quote.length/220}em)` // karyna
              : StyledTestimonialCardQuoteProps.quote.length < 370
                ? `calc(${StyledTestimonialCardQuoteProps.quote.length/440}em)` //spencer
                : `calc(${StyledTestimonialCardQuoteProps.quote.length/460}em)` //jimin
      : `0.85em`};

  letter-spacing: 0.05em;

  @media ${max.tablet} {
    font-size: ${(StyledTestimonialCardQuoteProps): string => 
      StyledTestimonialCardQuoteProps.quote 
        ? StyledTestimonialCardQuoteProps.quote.length < 230
            ? `calc(${StyledTestimonialCardQuoteProps.quote.length/105}em)` // raisa
            : StyledTestimonialCardQuoteProps.quote.length < 300
                ? `calc(${StyledTestimonialCardQuoteProps.quote.length/226}em)` // karyna
                : StyledTestimonialCardQuoteProps.quote.length < 370
                  ? `calc(${StyledTestimonialCardQuoteProps.quote.length/415}em)` //spencer
                  : `calc(${StyledTestimonialCardQuoteProps.quote.length/473}em)` //jimin
        : `0.85em`};
  }

  @media ${max.tabletXs} {
    font-size: ${(StyledTestimonialCardQuoteProps): string => 
    StyledTestimonialCardQuoteProps.quote 
      ? StyledTestimonialCardQuoteProps.quote.length < 230
          ? `calc(${StyledTestimonialCardQuoteProps.quote.length/125}em)` // raisa
          : StyledTestimonialCardQuoteProps.quote.length < 300
              ? `calc(${StyledTestimonialCardQuoteProps.quote.length/256}em)` // karyna
              : StyledTestimonialCardQuoteProps.quote.length < 370
                ? `calc(${StyledTestimonialCardQuoteProps.quote.length/488}em)` //spencer
                : `calc(${StyledTestimonialCardQuoteProps.quote.length/520}em)` //jimin
      : `0.85em`};
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
