import styled from '@emotion/styled';
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

const StyledArrowsContainer = styled.div`
  margin-top: -8em;
  margin-bottom: 6em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 25em;
`

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledCactusButtons,
  StyledTestimonialNumbers,
  StyledButtonNumberContainer,
  StyledArrowsContainer
};
