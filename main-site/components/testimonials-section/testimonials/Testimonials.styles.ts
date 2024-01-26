import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledTestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  overflow: hidden;
  text-align: left;
  flex-wrap: wrap;
`;

const StyledTestimonialsCenterContainer = styled.div`
  justify-content: center;
`;

const StyledTestimonialsLeftContainer = styled.div`
  justify-content: left;
  position: absolute;
  left: -10em;
  @media (max-width: 1100px) {
    left: -15em;
  }
  @media ${max.tabletLg} {
    left: -20em;
  }
  @media ${max.tablet} {
    left: -16em;
  }
  @media (max-width: 660px) {
    left: -20em;
  }
`;

const StyledTestimonialsRightContainer = styled.div`
  justify-content: right;
  position: absolute;
  right: -10em;
  @media (max-width: 1100px) {
    right: -15em;
  }
  @media ${max.tabletLg} {
    right: -20em;
  }
  @media ${max.tablet} {
    right: -16em;
  }
  @media (max-width: 660px) {
    right: -20em;
  }
`;


const StyledButtonNumberContainer = styled.div`
  display: inline-block;
`;

const StyledArrowsContainer = styled.div`
  margin-top: -8em;
  margin-bottom: 6em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 25em;
  @media ${max.tabletSm} {
    margin-top: 1em;
    gap: 10em;
  }
`

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledButtonNumberContainer,
  StyledArrowsContainer
};
