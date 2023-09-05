import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { fonts } from '../../../../shared-ui/style/typography';
import { StyledCactusButtonsProps } from '../../../lib/types';

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
    StyledCactusButtonsProps.isToggled ? '4em' : '2.8em'};
  height: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '4em' : '2.8em'};
  padding: 1em;
  align-item: center;
  margin-bottom: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '-0.5em' : '0'};
`;

const StyledTestimonialNumbers = styled.div<StyledCactusButtonsProps>`
  font-family: ${fonts.nunitoSansRegular};
  font-size: 1.3em;
  color: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled
      ? colors.DIRECTORS_YELLOW
      : colors.BLACK};
`;

const StyledButtonNumberContainer = styled.div`
  display: inline-block;
`;

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledCactusButtons,
  StyledTestimonialNumbers,
  StyledButtonNumberContainer
};
