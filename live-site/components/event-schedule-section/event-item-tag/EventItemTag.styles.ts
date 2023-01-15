import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { P } from '../../../../shared-ui/style/typography';
import { StyledTagAndTagTextProps } from '../../../lib/types';

const StyledTag = styled.div<StyledTagAndTagTextProps>`
  background-color: white;
  border-color: ${(StyledTagAndTagTextProps): string => {
    switch (StyledTagAndTagTextProps.type) {
      case 'Meal':
        return 'firebrick';
        break;
      case 'Beginner-Friendly':
        return 'purple';
        break;
      case 'Workshop':
        return 'green';
        break;
      case 'Action Item':
        return 'red';
        break;
      case 'Everyone':
        return 'darksalmon';
        break;
      case 'Sponsor Event':
        return 'orange';
        break;
      case 'Social/Fun Event':
        return 'lightblue';
        break;
      default:
        return 'black';
    }
  }};
  border-style: solid;
  border-radius: 2em;
  height: 2em;
`;

const StyledTagText = styled(P)<StyledTagAndTagTextProps>`
  color: ${(StyledTagAndTagTextProps): string => {
    switch (StyledTagAndTagTextProps.type) {
      case 'Meal':
        return 'firebrick';
        break;
      case 'Beginner-Friendly':
        return 'purple';
        break;
      case 'Workshop':
        return 'green';
        break;
      case 'Action Item':
        return 'red';
        break;
      case 'Everyone':
        return 'darksalmon';
        break;
      case 'Sponsor Event':
        return 'orange';
        break;
      case 'Social/Fun Event':
        return 'lightblue';
        break;
      default:
        return 'black';
    }
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
  @media (max-width: 1120px) {
    font-size: 0.2em;
    padding-top: 4.2em;
  }
  @media ${max.tablet} {
    font-size: 0.5em;
    padding-top: 1.33em;
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
