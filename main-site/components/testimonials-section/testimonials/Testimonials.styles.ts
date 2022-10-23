import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { StyledCactusButtonsProps } from '../../../lib/types';

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
  left: -14em;
  @media ${max.tabletLg} {
    left: -20em;
  }
  @media ${max.tablet} {
    left: -22em;
  }
`;

const StyledTestimonialsRightContainer = styled.div`
  justify-content: right;
  position: absolute;
  right: -14em;
  @media ${max.tabletLg} {
    right: -20em;
  }
  @media ${max.tablet} {
    right: -22em;
  }
`;

const StyledCactusButtons = styled.img<StyledCactusButtonsProps>`
  width: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '4em' : '3em'};
  height: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '4em' : '3em'};
  padding: 1em;
  align-item: center;
`;

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledCactusButtons
};
