import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledTestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  left: -12em;
  @media ${max.tabletLg} {
    left: -18em;
  }
  @media ${max.tablet} {
    left: -20em;
  }
`;

const StyledTestimonialsRightContainer = styled.div`
  justify-content: right;
  position: absolute;
  right: -12em;
  @media ${max.tabletLg} {
    right: -18em;
  }
  @media ${max.tablet} {
    right: -20em;
  }
`;

const StyledCactusButtons = styled.img`
  width: 3em;
  height: 3em;
  padding: 1em;
`;

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledCactusButtons
};
