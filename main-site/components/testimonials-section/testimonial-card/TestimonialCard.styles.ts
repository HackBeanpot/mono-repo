import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P, fonts } from '../../../../shared-ui/style/typography';
import {
  StyledTestimonialCardAuthorYearImageProps,
  StyledTestimonialCardQuoteProps
} from '../../../lib/types';

const StyledTestimonialCardContainer = styled.div`
  overflow: hidden;
  height: auto;
`;

const StyledTestimonialCardBox = styled.div<StyledTestimonialCardAuthorYearImageProps>`
  padding: 2.5em;
  margin: 2em;
  border-radius: 2em;
  width: 22em;
  height: 28em;
  border: 1px solid white;
  background-color: ${(props) : string => (props.isSponsor ? `#F3EFE3` : `none`)};

  @media ${max.tablet} {
    width: 18em;
    padding: 2em;
    margin-bottom: 10em;
    height: ${(props): string => (props.isSponsor ? `39em` : `32em`)};
  }

  @media ${max.tabletXs} {
    width: 12em;
    margin-bottom: 0em;
    height: ${(props): string => (props.isSponsor ? `auto` : `45em`)};
    padding: 1.5em;
  }
`;

const StyledTestimonialCardImage = styled.img<StyledTestimonialCardAuthorYearImageProps>`
  object-fit: ${(props): string => (props.isSponsor ? 'scale-down' : 'cover')};
  width: 100%;
  scale: ${(props): string => (props.isSponsor ? '0.9' : '')};
  height: ${(props): string => (props.isSponsor ? '32%' : '50%')};
  margin-bottom: ${'1em'};
  @media ${max.tabletXs} {
    border-radius: 0em;
  }
`;

const StyledTestimonialCardAuthor = styled(
  H4
)<StyledTestimonialCardAuthorYearImageProps>`
  font-size: ${(props): string => (props.isSponsor ? '1.8em' : '1.2em')};
  font-family: ${(props): string =>
    props.isSponsor ? fonts.nunitoRegular : fonts.nunitoSansRegular};
  margin-bottom: ${(props): string => (props.isSponsor ? '0em' : '0.4em')};
  color: ${(props): string => (props.isSponsor ? '#7E451F' : colors.WHITE)};
  text-align: ${(props): string => (props.isSponsor) ? 'center': 'left'};
`;

const StyledTestimonialCardYearCompany = styled(
  P
)<StyledTestimonialCardAuthorYearImageProps>`
  font-size: ${(props): string => (props.isSponsor ? '1.2em' : '1em')};
  color: ${(props): string => (props.isSponsor ? '#193C60'   : colors.WHITE)};
  text-align: ${(props): string => (props.isSponsor) ? 'center': 'left'};
  margin-bottom: 0.4em;
  font-family: ${fonts.nunitoRegular};
`;

const StyledTestimonialTextWrapper = styled.div<StyledTestimonialCardAuthorYearImageProps>`
  text-align: ${(props): string => (props.isSponsor ? 'center' : 'left')};
`;

const StyledTestimonialCardQuote = styled(P)<StyledTestimonialCardQuoteProps>`
  font-size: ${(props): string =>
    props.isSponsor
      ? `1.1em`
      : `0.85em`
    };
      
  letter-spacing: 0.05em;
  color: ${(props): string => (props.isSponsor ? '#193C60' : colors.WHITE)};
  text-align: ${(props): string => (props.isSponsor) ? 'center': 'left'};
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
  StyledTestimonialCardYearCompany,
  StyledTestimonialCardQuote,
  StyledTestimonialButtons,
  StyledTestimonialTextWrapper
};
