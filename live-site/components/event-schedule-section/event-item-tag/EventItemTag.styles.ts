import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { StyledTagAndTagTextProps } from '../../../lib/types';

const tagColor = (tagType: string): string => {
  switch (tagType) {
    case 'Food':
      return colors.FIREBRICK;
      break;
    case 'Beginner-Friendly':
      return colors.TEXT_LIGHT_GREEN;
      break;
    case 'Workshop':
      return colors.BRIGHT_PURPLE;
      break;
    case 'Action Item':
      return colors.RED;
      break;
    case 'Everyone':
      return colors.DARK_SALMON;
      break;
    case 'Sponsor Event':
      return colors.ORANGE;
      break;
    case 'Social/Fun Activity':
      return colors.TECH_BLUE;
      break;
    default:
      return colors.BLACK;
  }
};

const StyledTag = styled.div<StyledTagAndTagTextProps>`
  background-color: ${colors.LIGHT_GREY};
  border-radius: 2em;
  padding-top: 0.25em;
  height: 2.5em;

  @media ${max.tabletLg} {
    height: 2em;
  }

  @media ${max.tablet} {
    height: 2.2em;
  }

  @media ${max.mobile} {
    height: 1.5em;
    padding-bottom: 0.4em;
    display: inline;
    margin-top: -1em;
    margin-bottom: 1em;
    margin-left: 0.6em;
  }
`;

const StyledTagText = styled(P)<StyledTagAndTagTextProps>`
  color: ${(StyledTagAndTagTextProps): string => {
    return tagColor(StyledTagAndTagTextProps.tag);
  }};
  text-align: center;
  margin-top: auto;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.1em;
  @media (max-width: 1335px) {
    font-size: 0.9em;
    padding-top: 0.4em;
  }
  @media (max-width: 1200px) {
    font-size: 0.7em;
    padding-top: 0.7em;
  }
  @media (max-width: 900px) {
    font-size: 0.7em;
    padding-top: 0.2em;
  }
  @media ${max.tablet} {
    font-size: 0.8em;
    padding-top: 0.6em;
  }
  @media (max-width: 471px) {
    font-size: 0.32em;
    padding-top: 2.3em;
  }
  @media (max-width: 460px) {
    font-size: 0.9em;
    padding-top: 0.4em;
  } ;
`;

export { StyledTag, StyledTagText };
