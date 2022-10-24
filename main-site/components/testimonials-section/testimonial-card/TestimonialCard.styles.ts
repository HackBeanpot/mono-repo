import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';

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
    width: 14em;
    padding: 2em;
  }
`;

const StyledTestimonialCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
  text-align: center;
  margin-bottom: 1em;
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

const StyledTestimonialCardQuote = styled(P)`
  font-size: 0.85em;
  letter-spacing: 0.05em;
  @media ${max.tablet} {
    font-size: 0.67em;
  }
`;

const StyledTestimonialButtons = styled.div`
  cursor: pointer;
  padding: 1em;
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
