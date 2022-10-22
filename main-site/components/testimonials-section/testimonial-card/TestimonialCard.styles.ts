import styled from 'styled-components';
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
  width: 20em;
  height: 25em;
`;

const StyledTestimonialCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
  text-align: center;
`;

const StyledTestimonialCardAuthor = styled(H4)`
  font-size: 1.2em;
`;

const StyledTestimonialCardYear = styled(P)`
  font-size: 1em;
  margin-top: -1em;
  margin-bottom: 1em;
  color: ${colors.TEXT_GREY};
`;

const StyledTestimonialCardQuote = styled(P)`
  font-size: 0.8em;
  margin-top: -1em;
  letter-spacing: 0.05em;
`;

const StyledTestimonialButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
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
