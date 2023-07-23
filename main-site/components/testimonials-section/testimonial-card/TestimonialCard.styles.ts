import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';
import {
  StyledTestimonialCardAuthorYearImageProps,
  StyledTestimonialCardQuoteProps
} from '../../../lib/types';

// ${(StyledTestimonialCardAuthorYearImageProps): string =>
//    StyledTestimonialCardAuthorYearImageProps.isSponsor ? `center` : `left`};`

const StyledTestimonialCardContainer = styled.div`
  overflow: hidden;
`;

const StyledTestimonialCardBox = styled.div<StyledTestimonialCardAuthorYearImageProps>`
  padding: 2.5em;
  background-color: ${(props): string =>
    props.isSponsor ? colors.DUNE_HIGHLIGHT : colors.TEXT_BOX};
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

const StyledTestimonialCardImage = styled.img<StyledTestimonialCardAuthorYearImageProps>`
  object-fit: ${(props): string => (props.isSponsor ? 'contain' : 'cover')};
  width: 100%;
  scale: ${(props): string => (props.isSponsor ? '0.9' : '')};
  height: ${(props): string => (props.isSponsor ? '32%' : '50%')};
  margin-bottom: ${(props): string => (props.isSponsor ? '1em' : '1em')};
  @media ${max.tabletXs} {
    border-radius: 1em;
  }
`;

const StyledTestimonialCardAuthor = styled(H4)<StyledTestimonialCardAuthorYearImageProps>`
  font-size:${(props): string => (props.isSponsor ? '1.8em' : '1.2em')};
  margin-bottom: ${(props): string => (props.isSponsor ? '0em' : '0.4em')};
  color: ${(props): string => (props.isSponsor ? colors.TEXT_BOX : '')};
`;

const StyledTestimonialCardYear = styled(P)<StyledTestimonialCardAuthorYearImageProps>`
  font-size:${(props): string => (props.isSponsor ? '1.2em' : '1em')};
  color: ${(props): string =>
    props.isSponsor ? colors.BLACK : colors.TEXT_GREY};
  margin-bottom: 0.4em;
`;

const StyledTestimonialTextWrapper = styled.div<StyledTestimonialCardAuthorYearImageProps>`
  text-align: ${(props): string => (props.isSponsor ? 'center' : 'left')};
`;

const StyledTestimonialCardQuote = styled(P)<StyledTestimonialCardQuoteProps>`
font-size: ${(props): string =>
  props.isSponsor
    ? `1.1em`
    : props.quote
    ? props.quote.length < 230
      ? `calc(${props.quote.length / 105}em)` // raisa
      : props.quote.length < 300
      ? `calc(${props.quote.length / 220}em)` // karyna
      : props.quote.length < 370
      ? `calc(${props.quote.length / 440}em)` //spencer
      : `calc(${props.quote.length / 460}em)` //jimin
    : `0.85em`}};

  letter-spacing: 0.05em;

  @media ${max.tablet} {
    font-size: ${(props): string =>
      props.quote
        ? props.quote.length < 230
          ? `calc(${props.quote.length / 105}em)` // raisa
          : props.quote.length < 300
          ? `calc(${props.quote.length / 226}em)` // karyna
          : props.quote.length < 370
          ? `calc(${props.quote.length / 415}em)` //spencer
          : `calc(${props.quote.length / 473}em)` //jimin
        : `0.85em`};
  }

  @media ${max.tabletXs} {
    font-size: ${(props): string =>
      props.quote
        ? props.quote.length < 230
          ? `calc(${props.quote.length / 125}em)` // raisa
          : props.quote.length < 300
          ? `calc(${props.quote.length / 256}em)` // karyna
          : props.quote.length < 370
          ? `calc(${props.quote.length / 488}em)` //spencer
          : `calc(${props.quote.length / 520}em)` //jimin
        : `0.85em`};
  }

  color: ${(props): string => (props.isSponsor ? colors.BLACK : colors.WHITE)};
  margin-top: ${(props): string => (props.isSponsor ? '2em' : '0em')};
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
  StyledTestimonialButtons,
  StyledTestimonialTextWrapper
};
